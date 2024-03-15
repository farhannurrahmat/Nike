import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Di sini Anda dapat melakukan logging atau menangani error
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! Terjadi kesalahan.</h1>;
    }

    return this.props.children;
  }
}
