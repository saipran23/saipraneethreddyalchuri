import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/registry/magicui/scroll-based-velocity";
export function ScrollIdentity() {
  return (
    <div className="identity-strip">
      <ScrollVelocityContainer>
        <ScrollVelocityRow baseVelocity={20} direction={1}>
          SAI PRANEETH REDDY <span className="velocity-star">✳</span> FULL-STACK
          DEVELOPER <span className="velocity-star">✳</span>
        </ScrollVelocityRow>
        <ScrollVelocityRow
          baseVelocity={20}
          direction={-1}
          className="outline-row"
        >
          BACKEND ENGINEER · WEB DEVELOPER · ASPIRING AI ENGINEER ·
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="edge-fade left" />
      <div className="edge-fade right" />
    </div>
  );
}
