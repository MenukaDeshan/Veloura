const SHOPIFY_STOREFRONT_API_URL = 'https://mock.shop/api';

export async function shopifyFetch({ query, variables = {} }: { query: string, variables?: any }) {
  try {
    const response = await fetch(SHOPIFY_STOREFRONT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching from Shopify:', error);
    return { data: null };
  }
}

export async function getProducts() {
  const query = `
    {
      products(first: 8) {
        edges {
          node {
            id
            title
            handle
            description
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch({ query });
  return response.data?.products.edges.map((edge: any) => edge.node) || [];
}
