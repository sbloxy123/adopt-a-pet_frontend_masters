import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // usually log this to something like Sentry/new relic
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          there was an error with this listing.
          <Link to="/">click here to return to home page</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
