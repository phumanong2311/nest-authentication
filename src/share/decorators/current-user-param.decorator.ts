import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "src/infra/postgres/entities";

export const CurrentUserParam = createParamDecorator((
  data: User, ctx: ExecutionContext
) => {
  const request = ctx.switchToHttp().getRequest();
  return <User>request.currentUser;
})
