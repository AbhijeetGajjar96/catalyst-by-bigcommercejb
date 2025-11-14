// Minimal graphql function for build-time compatibility
// This is a placeholder that matches the gql.tada API
export function graphql<T = any>(
  strings: TemplateStringsArray | string,
  ...values: any[]
): T {
  // Return a placeholder object that matches the expected structure
  // This is only used for type checking during build
  return {} as T;
}

