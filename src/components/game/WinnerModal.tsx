"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface WinnerModalProps {
  open: boolean;
  onRestart: () => void;
}

export function WinnerModal({ open, onRestart }: WinnerModalProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="bg-card border-primary">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-4xl font-headline text-primary text-center">
            ¡¡Lotería!!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-lg text-foreground pt-4">
            ¡Felicidades, has ganado el juego!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="text-6xl text-center p-4">🎉🎊🥳</div>
        <AlertDialogFooter>
          <Button onClick={onRestart} className="w-full" size="lg">
            Jugar de Nuevo
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
