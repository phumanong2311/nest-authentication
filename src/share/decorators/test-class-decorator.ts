export function TestClassDecorator(): ClassDecorator {
  return (target) => {
    console.log('Constructor function:', target.prototype.constructor.toString());
  };
}
