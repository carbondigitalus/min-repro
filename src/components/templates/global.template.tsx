// NPM Modules
import React from 'react';

// Custom Modules
import Header from '../molecules/header.molecule';
import Footer from '../molecules/footer.molecule';

interface PageProps {
  children?: any;
}

export default class GlobalPageWrapper extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
