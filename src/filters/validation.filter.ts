import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { ValidationException } from "./validation.exception";


@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
    catch(exception: ValidationException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        return response.status(400).json({
            errorMessage: exception.validationErrors,
            createdBy: "ValidationFilter",
            status: 400
        })
    }
}