import type { Route } from "./+types/home"
import { Welcome } from "~/welcome/welcome"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "React Router + Fidely UI" },
    { name: "description", content: "Build modern apps with speed and flexibility" },
  ];
}

export default function Home() {
  return <Welcome />
}
