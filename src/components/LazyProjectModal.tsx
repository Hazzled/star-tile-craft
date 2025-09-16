import { lazy, Suspense } from 'react';

const ProjectModal = lazy(() => import('./ProjectModal'));

interface LazyProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const LazyProjectModal = ({ isOpen, onClose, project }: LazyProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <Suspense fallback={
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    }>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
    </Suspense>
  );
};

export default LazyProjectModal;