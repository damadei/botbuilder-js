/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * An interface representing TokenResponse.
 */
export interface TokenResponse {
  connectionName?: string;
  token?: string;
  expiration?: string;
}

/**
 * An interface representing InnerHttpError.
 */
export interface InnerHttpError {
  statusCode?: number;
  body?: any;
}

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  code?: string;
  message?: string;
  innerHttpError?: InnerHttpError;
}

/**
 * An interface representing ErrorResponse.
 */
export interface ErrorResponse {
  error?: ErrorModel;
}

/**
 * An interface representing AadResourceUrls.
 */
export interface AadResourceUrls {
  resourceUrls?: string[];
}

/**
 * The status of a particular token
 */
export interface TokenStatus {
  /**
   * The name of the connection the token status pertains to
   */
  connectionName?: string;
  /**
   * True if a token is stored for this ConnectionName
   */
  hasToken?: boolean;
  /**
   * The display name of the service provider for which this Token belongs to
   */
  serviceProviderDisplayName?: string;
}

/**
 * An interface representing TokenApiClientOptions.
 */
export interface TokenApiClientOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface BotSignInGetSignInUrlOptionalParams extends msRest.RequestOptionsBase {
  codeChallenge?: string;
  emulatorUrl?: string;
  finalRedirect?: string;
}

/**
 * Optional Parameters.
 */
export interface UserTokenGetTokenOptionalParams extends msRest.RequestOptionsBase {
  code?: string;
}

/**
 * Optional Parameters.
 */
export interface UserTokenSignOutOptionalParams extends msRest.RequestOptionsBase {
  connectionName?: string;
}

/**
 * Optional Parameters.
 */
export interface UserTokenGetTokenStatusOptionalParams extends msRest.RequestOptionsBase {
  include?: string;
}

/**
 * Contains response data for the getSignInUrl operation.
 */
export type BotSignInGetSignInUrlResponse = {
  /**
   * The parsed response body.
   */
  body: string;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: string;
    };
};

/**
 * Contains response data for the getToken operation.
 */
export type UserTokenGetTokenResponse = TokenResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TokenResponse;
    };
};

/**
 * Contains response data for the getAadTokens operation.
 */
export type UserTokenGetAadTokensResponse = {
  /**
   * The response body properties.
   */
  [propertyName: string]: TokenResponse;
} & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: { [propertyName: string]: TokenResponse };
    };
};

/**
 * Contains response data for the signOut operation.
 */
export type UserTokenSignOutResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the getTokenStatus operation.
 */
export type UserTokenGetTokenStatusResponse = Array<TokenStatus> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TokenStatus[];
    };
};
