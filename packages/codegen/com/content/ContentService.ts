/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v1.1.11
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import { User as UserService$User } from "./../identity/UserService";
export interface IPublishedDateArgs {
    month?: number;
    day?: number;
    year?: number;
}
export class PublishedDate implements thrift.StructLike {
    public month?: number;
    public day?: number;
    public year?: number;
    constructor(args?: IPublishedDateArgs) {
        if (args != null && args.month != null) {
            this.month = args.month;
        }
        if (args != null && args.day != null) {
            this.day = args.day;
        }
        if (args != null && args.year != null) {
            this.year = args.year;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("PublishedDate");
        if (this.month != null) {
            output.writeFieldBegin("month", thrift.TType.I32, 1);
            output.writeI32(this.month);
            output.writeFieldEnd();
        }
        if (this.day != null) {
            output.writeFieldBegin("day", thrift.TType.I32, 2);
            output.writeI32(this.day);
            output.writeFieldEnd();
        }
        if (this.year != null) {
            output.writeFieldBegin("year", thrift.TType.I32, 3);
            output.writeI32(this.year);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): PublishedDate {
        input.readStructBegin();
        let _args: any = {};
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.I32) {
                        const value_1: number = input.readI32();
                        _args.month = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.I32) {
                        const value_2: number = input.readI32();
                        _args.day = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.I32) {
                        const value_3: number = input.readI32();
                        _args.year = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return new PublishedDate(_args);
    }
}
export interface IPostArgs {
    id: number;
    author: UserService$User;
    date: PublishedDate;
    title: string;
    body?: string;
}
export class Post implements thrift.StructLike {
    public id: number;
    public author: UserService$User;
    public date: PublishedDate;
    public title: string;
    public body?: string;
    constructor(args: IPostArgs) {
        if (args != null && args.id != null) {
            this.id = args.id;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field id is unset!");
        }
        if (args != null && args.author != null) {
            this.author = args.author;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field author is unset!");
        }
        if (args != null && args.date != null) {
            this.date = args.date;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field date is unset!");
        }
        if (args != null && args.title != null) {
            this.title = args.title;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field title is unset!");
        }
        if (args != null && args.body != null) {
            this.body = args.body;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("Post");
        if (this.id != null) {
            output.writeFieldBegin("id", thrift.TType.I32, 1);
            output.writeI32(this.id);
            output.writeFieldEnd();
        }
        if (this.author != null) {
            output.writeFieldBegin("author", thrift.TType.STRUCT, 2);
            this.author.write(output);
            output.writeFieldEnd();
        }
        if (this.date != null) {
            output.writeFieldBegin("date", thrift.TType.STRUCT, 3);
            this.date.write(output);
            output.writeFieldEnd();
        }
        if (this.title != null) {
            output.writeFieldBegin("title", thrift.TType.STRING, 4);
            output.writeString(this.title);
            output.writeFieldEnd();
        }
        if (this.body != null) {
            output.writeFieldBegin("body", thrift.TType.STRING, 5);
            output.writeString(this.body);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): Post {
        input.readStructBegin();
        let _args: any = {};
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.I32) {
                        const value_4: number = input.readI32();
                        _args.id = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_5: UserService$User = UserService$User.read(input);
                        _args.author = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_6: PublishedDate = PublishedDate.read(input);
                        _args.date = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRING) {
                        const value_7: string = input.readString();
                        _args.title = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRING) {
                        const value_8: string = input.readString();
                        _args.body = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.id !== undefined && _args.author !== undefined && _args.date !== undefined && _args.title !== undefined) {
            return new Post(_args);
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read Post from input");
        }
    }
}
export interface IContentServiceExceptionArgs {
    message: string;
}
export class ContentServiceException implements thrift.StructLike {
    public message: string;
    constructor(args: IContentServiceExceptionArgs) {
        if (args != null && args.message != null) {
            this.message = args.message;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field message is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("ContentServiceException");
        if (this.message != null) {
            output.writeFieldBegin("message", thrift.TType.STRING, 1);
            output.writeString(this.message);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): ContentServiceException {
        input.readStructBegin();
        let _args: any = {};
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.STRING) {
                        const value_9: string = input.readString();
                        _args.message = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.message !== undefined) {
            return new ContentServiceException(_args);
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read ContentServiceException from input");
        }
    }
}
export namespace ContentService {
    export interface IGetPostArgsArgs {
        postId: number;
    }
    export class GetPostArgs implements thrift.StructLike {
        public postId: number;
        constructor(args: IGetPostArgsArgs) {
            if (args != null && args.postId != null) {
                this.postId = args.postId;
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field postId is unset!");
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("GetPostArgs");
            if (this.postId != null) {
                output.writeFieldBegin("postId", thrift.TType.I32, 1);
                output.writeI32(this.postId);
                output.writeFieldEnd();
            }
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        }
        public static read(input: thrift.TProtocol): GetPostArgs {
            input.readStructBegin();
            let _args: any = {};
            while (true) {
                const ret: thrift.IThriftField = input.readFieldBegin();
                const fieldType: thrift.TType = ret.fieldType;
                const fieldId: number = ret.fieldId;
                if (fieldType === thrift.TType.STOP) {
                    break;
                }
                switch (fieldId) {
                    case 1:
                        if (fieldType === thrift.TType.I32) {
                            const value_10: number = input.readI32();
                            _args.postId = value_10;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    default: {
                        input.skip(fieldType);
                    }
                }
                input.readFieldEnd();
            }
            input.readStructEnd();
            if (_args.postId !== undefined) {
                return new GetPostArgs(_args);
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read GetPostArgs from input");
            }
        }
    }
    export interface IAddArgsArgs {
        left: number;
        right: number;
    }
    export class AddArgs implements thrift.StructLike {
        public left: number;
        public right: number;
        constructor(args: IAddArgsArgs) {
            if (args != null && args.left != null) {
                this.left = args.left;
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field left is unset!");
            }
            if (args != null && args.right != null) {
                this.right = args.right;
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field right is unset!");
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("AddArgs");
            if (this.left != null) {
                output.writeFieldBegin("left", thrift.TType.I32, 1);
                output.writeI32(this.left);
                output.writeFieldEnd();
            }
            if (this.right != null) {
                output.writeFieldBegin("right", thrift.TType.I32, 2);
                output.writeI32(this.right);
                output.writeFieldEnd();
            }
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        }
        public static read(input: thrift.TProtocol): AddArgs {
            input.readStructBegin();
            let _args: any = {};
            while (true) {
                const ret: thrift.IThriftField = input.readFieldBegin();
                const fieldType: thrift.TType = ret.fieldType;
                const fieldId: number = ret.fieldId;
                if (fieldType === thrift.TType.STOP) {
                    break;
                }
                switch (fieldId) {
                    case 1:
                        if (fieldType === thrift.TType.I32) {
                            const value_11: number = input.readI32();
                            _args.left = value_11;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    case 2:
                        if (fieldType === thrift.TType.I32) {
                            const value_12: number = input.readI32();
                            _args.right = value_12;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    default: {
                        input.skip(fieldType);
                    }
                }
                input.readFieldEnd();
            }
            input.readStructEnd();
            if (_args.left !== undefined && _args.right !== undefined) {
                return new AddArgs(_args);
            }
            else {
                throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read AddArgs from input");
            }
        }
    }
    export interface IGetPostResultArgs {
        success?: Post;
        exp?: ContentServiceException;
    }
    export class GetPostResult implements thrift.StructLike {
        public success?: Post;
        public exp?: ContentServiceException;
        constructor(args?: IGetPostResultArgs) {
            if (args != null && args.success != null) {
                this.success = args.success;
            }
            if (args != null && args.exp != null) {
                this.exp = args.exp;
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("GetPostResult");
            if (this.success != null) {
                output.writeFieldBegin("success", thrift.TType.STRUCT, 0);
                this.success.write(output);
                output.writeFieldEnd();
            }
            if (this.exp != null) {
                output.writeFieldBegin("exp", thrift.TType.STRUCT, 1);
                this.exp.write(output);
                output.writeFieldEnd();
            }
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        }
        public static read(input: thrift.TProtocol): GetPostResult {
            input.readStructBegin();
            let _args: any = {};
            while (true) {
                const ret: thrift.IThriftField = input.readFieldBegin();
                const fieldType: thrift.TType = ret.fieldType;
                const fieldId: number = ret.fieldId;
                if (fieldType === thrift.TType.STOP) {
                    break;
                }
                switch (fieldId) {
                    case 0:
                        if (fieldType === thrift.TType.STRUCT) {
                            const value_13: Post = Post.read(input);
                            _args.success = value_13;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    case 1:
                        if (fieldType === thrift.TType.STRUCT) {
                            const value_14: ContentServiceException = ContentServiceException.read(input);
                            _args.exp = value_14;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    default: {
                        input.skip(fieldType);
                    }
                }
                input.readFieldEnd();
            }
            input.readStructEnd();
            return new GetPostResult(_args);
        }
    }
    export interface IAddResultArgs {
        success?: number;
    }
    export class AddResult implements thrift.StructLike {
        public success?: number;
        constructor(args?: IAddResultArgs) {
            if (args != null && args.success != null) {
                this.success = args.success;
            }
        }
        public write(output: thrift.TProtocol): void {
            output.writeStructBegin("AddResult");
            if (this.success != null) {
                output.writeFieldBegin("success", thrift.TType.I32, 0);
                output.writeI32(this.success);
                output.writeFieldEnd();
            }
            output.writeFieldStop();
            output.writeStructEnd();
            return;
        }
        public static read(input: thrift.TProtocol): AddResult {
            input.readStructBegin();
            let _args: any = {};
            while (true) {
                const ret: thrift.IThriftField = input.readFieldBegin();
                const fieldType: thrift.TType = ret.fieldType;
                const fieldId: number = ret.fieldId;
                if (fieldType === thrift.TType.STOP) {
                    break;
                }
                switch (fieldId) {
                    case 0:
                        if (fieldType === thrift.TType.I32) {
                            const value_15: number = input.readI32();
                            _args.success = value_15;
                        }
                        else {
                            input.skip(fieldType);
                        }
                        break;
                    default: {
                        input.skip(fieldType);
                    }
                }
                input.readFieldEnd();
            }
            input.readStructEnd();
            return new AddResult(_args);
        }
    }
    export class Client<Context = any> {
        public readonly _serviceName: string = "ContentService";
        protected _requestId: number;
        protected transport: thrift.ITransportConstructor;
        protected protocol: thrift.IProtocolConstructor;
        protected connection: thrift.IThriftConnection<Context>;
        constructor(connection: thrift.IThriftConnection<Context>) {
            this._requestId = 0;
            this.transport = connection.Transport;
            this.protocol = connection.Protocol;
            this.connection = connection;
        }
        public incrementRequestId(): number {
            return this._requestId += 1;
        }
        public getPost(postId: number, context?: Context): Promise<Post> {
            const writer: thrift.TTransport = new this.transport();
            const output: thrift.TProtocol = new this.protocol(writer);
            output.writeMessageBegin("getPost", thrift.MessageType.CALL, this.incrementRequestId());
            const args: GetPostArgs = new GetPostArgs({ postId });
            args.write(output);
            output.writeMessageEnd();
            return this.connection.send(writer.flush(), context).then((data: Buffer) => {
                const reader: thrift.TTransport = this.transport.receiver(data);
                const input: thrift.TProtocol = new this.protocol(reader);
                try {
                    const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                    if (fieldName === "getPost") {
                        if (messageType === thrift.MessageType.EXCEPTION) {
                            const err: thrift.TApplicationException = thrift.TApplicationException.read(input);
                            input.readMessageEnd();
                            return Promise.reject(err);
                        }
                        const result: GetPostResult = GetPostResult.read(input);
                        input.readMessageEnd();
                        if (result.exp != null) {
                            return Promise.reject(result.exp);
                        }
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "getPost failed: unknown result"));
                        }
                    }
                    else {
                        return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                    }
                }
                catch (err) {
                    return Promise.reject(err);
                }
            });
        }
        public add(left: number, right: number, context?: Context): Promise<number> {
            const writer: thrift.TTransport = new this.transport();
            const output: thrift.TProtocol = new this.protocol(writer);
            output.writeMessageBegin("add", thrift.MessageType.CALL, this.incrementRequestId());
            const args: AddArgs = new AddArgs({ left, right });
            args.write(output);
            output.writeMessageEnd();
            return this.connection.send(writer.flush(), context).then((data: Buffer) => {
                const reader: thrift.TTransport = this.transport.receiver(data);
                const input: thrift.TProtocol = new this.protocol(reader);
                try {
                    const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                    if (fieldName === "add") {
                        if (messageType === thrift.MessageType.EXCEPTION) {
                            const err: thrift.TApplicationException = thrift.TApplicationException.read(input);
                            input.readMessageEnd();
                            return Promise.reject(err);
                        }
                        const result: AddResult = AddResult.read(input);
                        input.readMessageEnd();
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "add failed: unknown result"));
                        }
                    }
                    else {
                        return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                    }
                }
                catch (err) {
                    return Promise.reject(err);
                }
            });
        }
    }
    export interface IHandler<Context = any> {
        getPost(postId: number, context?: Context): Post | Promise<Post>;
        add(left: number, right: number, context?: Context): number | Promise<number>;
    }
    export class Processor<Context = any> {
        public readonly _serviceName: string = "ContentService";
        public _handler: IHandler<Context>;
        constructor(handler: IHandler<Context>) {
            this._handler = handler;
        }
        public process(input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
            return new Promise<Buffer>((resolve, reject): void => {
                const metadata: thrift.IThriftMessage = input.readMessageBegin();
                const fieldName: string = metadata.fieldName;
                const requestId: number = metadata.requestId;
                const methodName: string = "process_" + fieldName;
                switch (methodName) {
                    case "process_getPost": {
                        resolve(this.process_getPost(requestId, input, output, context));
                        break;
                    }
                    case "process_add": {
                        resolve(this.process_add(requestId, input, output, context));
                        break;
                    }
                    default: {
                        input.skip(thrift.TType.STRUCT);
                        input.readMessageEnd();
                        const errMessage = "Unknown function " + fieldName;
                        const err = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN_METHOD, errMessage);
                        output.writeMessageBegin(fieldName, thrift.MessageType.EXCEPTION, requestId);
                        err.write(output);
                        output.writeMessageEnd();
                        resolve(output.flush());
                        break;
                    }
                }
            });
        }
        public process_getPost(requestId: number, input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
            return new Promise<Post>((resolve, reject): void => {
                try {
                    const args: GetPostArgs = GetPostArgs.read(input);
                    input.readMessageEnd();
                    resolve(this._handler.getPost(args.postId, context));
                }
                catch (err) {
                    reject(err);
                }
            }).then((data: Post): Buffer => {
                const result: GetPostResult = new GetPostResult({ success: data });
                output.writeMessageBegin("getPost", thrift.MessageType.REPLY, requestId);
                result.write(output);
                output.writeMessageEnd();
                return output.flush();
            }).catch((err: Error): Buffer => {
                if (err instanceof ContentServiceException) {
                    const result: GetPostResult = new GetPostResult({ exp: err });
                    output.writeMessageBegin("getPost", thrift.MessageType.REPLY, requestId);
                    result.write(output);
                    output.writeMessageEnd();
                    return output.flush();
                }
                else {
                    const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
                    output.writeMessageBegin("getPost", thrift.MessageType.EXCEPTION, requestId);
                    result.write(output);
                    output.writeMessageEnd();
                    return output.flush();
                }
            });
        }
        public process_add(requestId: number, input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
            return new Promise<number>((resolve, reject): void => {
                try {
                    const args: AddArgs = AddArgs.read(input);
                    input.readMessageEnd();
                    resolve(this._handler.add(args.left, args.right, context));
                }
                catch (err) {
                    reject(err);
                }
            }).then((data: number): Buffer => {
                const result: AddResult = new AddResult({ success: data });
                output.writeMessageBegin("add", thrift.MessageType.REPLY, requestId);
                result.write(output);
                output.writeMessageEnd();
                return output.flush();
            }).catch((err: Error): Buffer => {
                const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
                output.writeMessageBegin("add", thrift.MessageType.EXCEPTION, requestId);
                result.write(output);
                output.writeMessageEnd();
                return output.flush();
            });
        }
    }
}