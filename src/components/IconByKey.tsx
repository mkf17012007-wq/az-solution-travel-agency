import type { ComponentType } from "react";
import type { IconKey } from "@/content/home";
import {
  CarIcon,
  CheckIcon,
  DropletIcon,
  GlobeIcon,
  HomeIcon,
  PlaneIcon,
  ShieldIcon,
  StarIcon,
  UsersIcon
} from "./icons";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

const map: Record<IconKey, IconComponent> = {
  plane: PlaneIcon,
  globe: GlobeIcon,
  users: UsersIcon,
  droplet: DropletIcon,
  home: HomeIcon,
  car: CarIcon,
  check: CheckIcon,
  star: StarIcon,
  shield: ShieldIcon
};

export function IconByKey({
  name,
  size = 24,
  className
}: {
  name: IconKey;
  size?: number;
  className?: string;
}) {
  const Icon = map[name];
  return <Icon size={size} className={className} />;
}
