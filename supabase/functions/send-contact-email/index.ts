
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received contact form submission request");
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Get form data
    const formData: ContactFormData = await req.json();
    console.log("Form data received:", { name: formData.name, email: formData.email, phone: formData.phone });

    // Store in database first
    const { data: dbResult, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([formData])
      .select();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Failed to store submission" 
        }),
        {
          status: 500,
          headers: { 
            "Content-Type": "application/json", 
            ...corsHeaders 
          },
        }
      );
    }

    console.log("Form data stored in database successfully:", dbResult);

    // Send emails using Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not found");
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Form submitted successfully but emails not sent (no API key)" 
        }),
        {
          status: 200,
          headers: { 
            "Content-Type": "application/json", 
            ...corsHeaders 
          },
        }
      );
    }

    const resend = new Resend(resendApiKey);
    
    // Send notification email to business
    const businessEmailResponse = await resend.emails.send({
      from: "Star Tile LLC Contact Form <onboarding@resend.dev>",
      to: ["Contact@Startilellc.com"],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message ? formData.message.replace(/\n/g, '<br>') : 'No message provided'}</p>
        
        <hr>
        <p><em>This message was sent from the Star Tile LLC website contact form.</em></p>
      `,
    });

    console.log("Business notification email sent:", businessEmailResponse);

    // Send confirmation email to customer
    const confirmationEmailResponse = await resend.emails.send({
      from: "Star Tile LLC <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting Star Tile LLC",
      html: `
        <h2>Thank you for your inquiry, ${formData.name}!</h2>
        <p>We have received your message and will get back to you within 24 hours.</p>
        
        <h3>Your submission details:</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        ${formData.message ? `<p><strong>Message:</strong><br>${formData.message.replace(/\n/g, '<br>')}</p>` : ''}
        
        <hr>
        <p>Best regards,<br>
        <strong>Star Tile LLC</strong><br>
        Phone: (503) 482-8395<br>
        Email: Contact@Startilellc.com</p>
        
        <p><em>Licensed & Insured - CCB #200970</em></p>
      `,
    });

    console.log("Customer confirmation email sent:", confirmationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted and confirmation emails sent successfully",
        submissionId: dbResult[0].id,
        businessEmailId: businessEmailResponse.data?.id,
        confirmationEmailId: confirmationEmailResponse.data?.id
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in contact form submission:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
