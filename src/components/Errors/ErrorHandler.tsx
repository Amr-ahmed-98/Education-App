import { Unauthorized, ServerError, ServiceUnavailable, EmptyState, NetworkError } from "./indexc";
import type { ReactNode } from "react";
import NotFound from "./NotFound";

export type ErrorStatus =
  | 401 | 403 // Unauthorized
  | 404
  | 500      // Server error
  | 503      // Service unavailable
  | "empty"  // Empty state
  | "network"; // No internet

type ErrorHandlerProps = {
  status: ErrorStatus;
  message?: string | ReactNode;
};

const ErrorHandler = ({ status, message }: ErrorHandlerProps) => {
  switch (status) {
    case 401:
    case 403:
      return <Unauthorized />;
      case 404:
        return <NotFound />;
    case 500:
      return <ServerError />;
    case 503:
      return <ServiceUnavailable />;
    case "empty":
      return <EmptyState />;
    case "network":
      return <NetworkError />;
    default:
      return null;
  }
};

export default ErrorHandler;
