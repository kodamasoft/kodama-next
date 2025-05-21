import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge conditional tailwind classes without conflicts
export default function cn(...inputs) {
    return twMerge(clsx(inputs));
}