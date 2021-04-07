import { gql } from "@apollo/client";

const AUTH_GOOGLE = gql`
  mutation SocialAuth($provider: String!, $accessToken: String!) {
    socialAuth(provider: $provider, accessToken: $accessToken) {
      social {
        uid
        extraData
      }
      token
    }
  }`;

export default AUTH_GOOGLE