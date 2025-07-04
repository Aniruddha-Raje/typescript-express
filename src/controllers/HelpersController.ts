import { Controller, Get, Route, Tags } from 'tsoa';

@Route("health")
@Tags("Helpers")
export class HelpersController extends Controller {
  
  @Get("/")
  public async healthcheck(): Promise<{ status: string }> {
    return { status: "ok" };
  }
}
