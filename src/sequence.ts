import { config, inject } from '@loopback/core';
import {FindRoute, InvokeMethod, InvokeMiddleware, InvokeMiddlewareOptions, MiddlewareSequence, ParseParams, Reject, RequestContext, Send, SequenceActions, SequenceHandler} from '@loopback/rest';
// import { Send } from 'express-serve-static-core';
// export class MySequence extends MiddlewareSequence {}

export class NewSequence implements SequenceHandler {
    /**
     * Optional middleware chain
     * Invokes registered middleware (injected via SequenceActions.MIDDLEWARE).
     */
  
    constructor(
        @config()
       readonly options: InvokeMiddlewareOptions = MiddlewareSequence.defaultOptions,
        @inject(SequenceActions.INVOKE_MIDDLEWARE)
        protected invokeMiddleware: InvokeMiddleware = () => false,
        @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
        @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
        @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
        @inject(SequenceActions.SEND) public send: Send,
        @inject(SequenceActions.REJECT) public reject: Reject,
      ) {}
    // ...
    async handle(context: RequestContext): Promise<void> {
      try {
        const {request, response} = context;
         await this.invokeMiddleware(context,this.options);
        // if (finished) return;
        const route = this.findRoute(request);
        const args = await this.parseParams(request, route);
        const result = await this.invoke(route, args);
  
        // debug('%s result -', route.describe(), result);
        this.send(response,result);
      } catch (error) {
        this.reject(context, error);
      }
    }
  }
  
