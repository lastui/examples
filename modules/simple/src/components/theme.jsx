import { styled } from "@linaria/react";

export const Title = styled.div`
  color: ${(props) => ["cyan", "darkred", "green"][props.count % 3]};
`;