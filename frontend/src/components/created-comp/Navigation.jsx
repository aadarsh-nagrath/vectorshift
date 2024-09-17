import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import NavigationLink from "./NavigationLink";
import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  Square2StackIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const variants = {
  container: {
    close: {
      width: "4rem",
      transition: { type: "spring", damping: 15, duration: 0.5 },
    },
    open: {
      width: "16rem",
      transition: { type: "spring", damping: 15, duration: 0.5 },
    },
  },
  svg: {
    close: { rotate: 0, x: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
    open: { rotate: 180, x: "10%", transition: { duration: 0.5, ease: "easeInOut" } },
  },
  text: {
    close: { opacity: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, transition: { duration: 0.3 } },
  },
  avatar: {
    close: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: "0%" },
  },
};

const Navigation = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();
  const avatarControls = useAnimationControls();

  useEffect(() => {
    containerControls.start(isOpen ? "open" : "close");
    svgControls.start(isOpen ? "open" : "close");
    avatarControls.start(isOpen ? "open" : "close");
    onToggle(isOpen);
  }, [isOpen]);

  return (
    <motion.nav
      variants={variants.container}
      animate={containerControls}
      initial="close"
      className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
    >
      <div className="flex flex-row w-full items-center relative">
        {isOpen && (
          <motion.div
            animate={avatarControls}
            variants={variants.avatar}
            className="absolute left-5"
          >
            <Avatar>
              <AvatarImage
                src="https://app.vectorshift.ai/favicon-512x512.png"
                alt="Avatar"
                className="w-10 h-10"
              />
              <AvatarFallback>VS</AvatarFallback>
            </Avatar>
          </motion.div>
        )}
        <button
          className="p-1 rounded-full flex ml-auto"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 stroke-neutral-200"
            animate={svgControls}
            variants={variants.svg}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </motion.svg>
        </button>
      </div>
      <div className="flex flex-col gap-3 mt-12">
        {[
          { icon: ChartBarIcon, text: "Dashboard" },
          { icon: Square2StackIcon, text: "PipeLines" },
          { icon: DocumentCheckIcon, text: "Tasks" },
          { icon: ChartPieIcon, text: "Reporting" },
          { icon: UsersIcon, text: "Collaborators" },
        ].map(({ icon: Icon, text }) => (
          <NavigationLink key={text}>
            <Icon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
            <motion.div
              variants={variants.text}
              animate={isOpen ? "open" : "close"}
              className="text"
            >
              {text}
            </motion.div>
          </NavigationLink>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
