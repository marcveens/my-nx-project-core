import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.div`
  color: pink;
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton>
      <h1>Welcome to local Button!</h1>
    </StyledButton>
  );
}

export default Button;
