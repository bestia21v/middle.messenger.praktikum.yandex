export function addDefaultClass(props: any, className: string) {
  const propsAttributesClass = props?.attributes?.class;
  return {
    ...props,
    attributes: {
      ...props.attributes,
      class: propsAttributesClass
        ? `${propsAttributesClass} ${className}`
        : `${className}`,
    },
  };
}
