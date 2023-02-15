# Vite(est) & Enzyme & Preact & Semantic-Ui-React

This repository contains a basic project that's set up to build a [preact](https://preactjs.com/) frontend with vite. Unit tests are set up with [vitest](https://vitest.dev/) and show a problem when mounting [semantic-ui-react](https://react.semantic-ui.com/) components.

```
npm test src/Counter.test.jsx # works fine, pure preact component
npm test src/SemanticButton.test.jsx # does not work
```

The second command fails with the following message:

```
 FAIL  SemanticButton.test.jsx > SemanticButton > should mount component
Error: Expected VDOM node to be a DOM node but got function Ref(props) {
  var children = props.children,
      innerRef = props.innerRef,
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  var child = React.Children.only(children);
  var ElementType = ReactIs.isForwardRef(child) ? _RefForward.RefForward : _RefFindNode.RefFindNode;
  var childWithProps = child && rest && Object.keys(rest).length > 0 ? /*#__PURE__*/React.cloneElement(child, rest) : child;
  return /*#__PURE__*/React.createElement(ElementType, {
    innerRef: innerRef
  }, childWithProps);
}
 ❯ rstNodeFromVNode ../node_modules/enzyme-adapter-preact-pure/build-cjs/src/preact10-rst.js:73:15
 ❯ ../node_modules/enzyme-adapter-preact-pure/build-cjs/src/preact10-rst.js:50:21
 ❯ rstNodesFromChildren ../node_modules/enzyme-adapter-preact-pure/build-cjs/src/preact10-rst.js:42:18
 ❯ rstNodeFromComponent ../node_modules/enzyme-adapter-preact-pure/build-cjs/src/preact10-rst.js:136:22
 ❯ rstNodeFromVNode ../node_modules/enzyme-adapter-preact-pure/build-cjs/src/preact10-rst.js:70:16
 ❯ ../node_modules/enzyme-adapter-preact-pure/build-cjs/src/preact10-rst.js:50:21
 ❯ rstNodesFromChildren ../node_modules/enzyme-adapter-preact-pure/build-cjs/src/preact10-rst.js:42:18
 ❯ rstNodeFromComponent ../node_modules/enzyme-adapter-preact-pure/build-cjs/src/preact10-rst.js:136:22
 ```
