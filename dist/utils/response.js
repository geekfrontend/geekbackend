"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor(statusCode, status, message, data) {
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=response.js.map