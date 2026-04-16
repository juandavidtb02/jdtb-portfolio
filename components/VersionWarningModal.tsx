"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

const STORAGE_KEY = "version-warning-seen";
const NEW_VERSION_URL = "https://jdtb-portfolio.vercel.app/";

export function VersionWarningModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya vio el modal en esta sesión
    const hasSeenModal = sessionStorage.getItem(STORAGE_KEY);
    
    if (!hasSeenModal) {
      // Pequeño delay para una mejor UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleContinueHere = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  const handleGoToNewVersion = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    window.location.href = NEW_VERSION_URL;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="sm:max-w-[500px] gap-6 animate-in fade-in-0 zoom-in-95 duration-300"
        aria-describedby="version-warning-description"
        showCloseButton={false}
      >
        <DialogHeader className="space-y-3">
          <div className="flex items-center justify-center mb-2">
            <div className="p-3 bg-primary/10 rounded-full">
              <ExternalLink className="h-8 w-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            Esta es una versión anterior del portafolio
          </DialogTitle>
          <DialogDescription 
            id="version-warning-description"
            className="text-base text-muted-foreground leading-relaxed text-center"
          >
            Actualmente existe una versión más reciente de este sitio. ¿Deseas
            visitar la nueva versión o continuar en esta?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex-col sm:flex-col gap-3">
          <Button
            onClick={handleGoToNewVersion}
            className="w-full animate-glow cursor-pointer"
            size="lg"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Ir a la nueva versión
          </Button>
          <Button
            variant="outline"
            onClick={handleContinueHere}
            className="w-full"
            size="lg"
          >
            Continuar aquí
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
