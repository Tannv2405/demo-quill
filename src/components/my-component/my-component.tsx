import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  componentWillLoad() {
    // Ensure Quill is available
  
  }

  render() {
    return <text-editor   ></text-editor>;
  }
}
