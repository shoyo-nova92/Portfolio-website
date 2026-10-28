import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";

export default function NotFound() { return <Container><div className="not-found"><Eyebrow>404 / Off the map</Eyebrow><h1>This page isn’t here.</h1><p>The link may have changed. There’s still plenty of work to explore.</p><ButtonLink href="/#work">Back to selected work</ButtonLink></div></Container>; }
