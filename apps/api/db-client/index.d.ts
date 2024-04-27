
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Anime
 * 
 */
export type Anime = $Result.DefaultSelection<Prisma.$AnimePayload>
/**
 * Model AnimeHistory
 * 
 */
export type AnimeHistory = $Result.DefaultSelection<Prisma.$AnimeHistoryPayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model Latest
 * 
 */
export type Latest = $Result.DefaultSelection<Prisma.$LatestPayload>
/**
 * Model Tags
 * 
 */
export type Tags = $Result.DefaultSelection<Prisma.$TagsPayload>
/**
 * Model TagsByAnime
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type TagsByAnime = $Result.DefaultSelection<Prisma.$TagsByAnimePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Anime
 * const anime = await prisma.anime.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Anime
   * const anime = await prisma.anime.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.anime`: Exposes CRUD operations for the **Anime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anime
    * const anime = await prisma.anime.findMany()
    * ```
    */
  get anime(): Prisma.AnimeDelegate<ExtArgs>;

  /**
   * `prisma.animeHistory`: Exposes CRUD operations for the **AnimeHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeHistories
    * const animeHistories = await prisma.animeHistory.findMany()
    * ```
    */
  get animeHistory(): Prisma.AnimeHistoryDelegate<ExtArgs>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs>;

  /**
   * `prisma.latest`: Exposes CRUD operations for the **Latest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Latests
    * const latests = await prisma.latest.findMany()
    * ```
    */
  get latest(): Prisma.LatestDelegate<ExtArgs>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **Tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.TagsDelegate<ExtArgs>;

  /**
   * `prisma.tagsByAnime`: Exposes CRUD operations for the **TagsByAnime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TagsByAnimes
    * const tagsByAnimes = await prisma.tagsByAnime.findMany()
    * ```
    */
  get tagsByAnime(): Prisma.TagsByAnimeDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Anime: 'Anime',
    AnimeHistory: 'AnimeHistory',
    Episode: 'Episode',
    Latest: 'Latest',
    Tags: 'Tags',
    TagsByAnime: 'TagsByAnime',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'anime' | 'animeHistory' | 'episode' | 'latest' | 'tags' | 'tagsByAnime' | 'user'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Anime: {
        payload: Prisma.$AnimePayload<ExtArgs>
        fields: Prisma.AnimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          findFirst: {
            args: Prisma.AnimeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          findMany: {
            args: Prisma.AnimeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>[]
          }
          create: {
            args: Prisma.AnimeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          createMany: {
            args: Prisma.AnimeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AnimeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          update: {
            args: Prisma.AnimeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          deleteMany: {
            args: Prisma.AnimeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnimeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          aggregate: {
            args: Prisma.AnimeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnime>
          }
          groupBy: {
            args: Prisma.AnimeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeCountArgs<ExtArgs>,
            result: $Utils.Optional<AnimeCountAggregateOutputType> | number
          }
        }
      }
      AnimeHistory: {
        payload: Prisma.$AnimeHistoryPayload<ExtArgs>
        fields: Prisma.AnimeHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          findFirst: {
            args: Prisma.AnimeHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          findMany: {
            args: Prisma.AnimeHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>[]
          }
          create: {
            args: Prisma.AnimeHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          createMany: {
            args: Prisma.AnimeHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AnimeHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          update: {
            args: Prisma.AnimeHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          deleteMany: {
            args: Prisma.AnimeHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnimeHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimeHistoryPayload>
          }
          aggregate: {
            args: Prisma.AnimeHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnimeHistory>
          }
          groupBy: {
            args: Prisma.AnimeHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnimeHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<AnimeHistoryCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>,
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      Latest: {
        payload: Prisma.$LatestPayload<ExtArgs>
        fields: Prisma.LatestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LatestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LatestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          findFirst: {
            args: Prisma.LatestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LatestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          findMany: {
            args: Prisma.LatestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>[]
          }
          create: {
            args: Prisma.LatestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          createMany: {
            args: Prisma.LatestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LatestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          update: {
            args: Prisma.LatestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          deleteMany: {
            args: Prisma.LatestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LatestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LatestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LatestPayload>
          }
          aggregate: {
            args: Prisma.LatestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLatest>
          }
          groupBy: {
            args: Prisma.LatestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LatestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LatestCountArgs<ExtArgs>,
            result: $Utils.Optional<LatestCountAggregateOutputType> | number
          }
        }
      }
      Tags: {
        payload: Prisma.$TagsPayload<ExtArgs>
        fields: Prisma.TagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findFirst: {
            args: Prisma.TagsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          findMany: {
            args: Prisma.TagsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>[]
          }
          create: {
            args: Prisma.TagsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          createMany: {
            args: Prisma.TagsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TagsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          update: {
            args: Prisma.TagsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          deleteMany: {
            args: Prisma.TagsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TagsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TagsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.TagsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsCountArgs<ExtArgs>,
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      TagsByAnime: {
        payload: Prisma.$TagsByAnimePayload<ExtArgs>
        fields: Prisma.TagsByAnimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsByAnimeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsByAnimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsByAnimeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsByAnimePayload>
          }
          findFirst: {
            args: Prisma.TagsByAnimeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsByAnimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsByAnimeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsByAnimePayload>
          }
          findMany: {
            args: Prisma.TagsByAnimeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsByAnimePayload>[]
          }
          create: {
            args: Prisma.TagsByAnimeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsByAnimePayload>
          }
          createMany: {
            args: Prisma.TagsByAnimeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TagsByAnimeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsByAnimePayload>
          }
          update: {
            args: Prisma.TagsByAnimeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsByAnimePayload>
          }
          deleteMany: {
            args: Prisma.TagsByAnimeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TagsByAnimeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TagsByAnimeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsByAnimePayload>
          }
          aggregate: {
            args: Prisma.TagsByAnimeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTagsByAnime>
          }
          groupBy: {
            args: Prisma.TagsByAnimeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagsByAnimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsByAnimeCountArgs<ExtArgs>,
            result: $Utils.Optional<TagsByAnimeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AnimeCountOutputType
   */

  export type AnimeCountOutputType = {
    Episode: number
    Latest: number
    Tags: number
  }

  export type AnimeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Episode?: boolean | AnimeCountOutputTypeCountEpisodeArgs
    Latest?: boolean | AnimeCountOutputTypeCountLatestArgs
    Tags?: boolean | AnimeCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeCountOutputType
     */
    select?: AnimeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeCountEpisodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }

  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeCountLatestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LatestWhereInput
  }

  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsByAnimeWhereInput
  }


  /**
   * Count Type EpisodeCountOutputType
   */

  export type EpisodeCountOutputType = {
    AnimeHistory: number
  }

  export type EpisodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AnimeHistory?: boolean | EpisodeCountOutputTypeCountAnimeHistoryArgs
  }

  // Custom InputTypes
  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodeCountOutputType
     */
    select?: EpisodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeCountAnimeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeHistoryWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    TagsByAnime: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TagsByAnime?: boolean | TagsCountOutputTypeCountTagsByAnimeArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountTagsByAnimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsByAnimeWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    AnimeHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AnimeHistory?: boolean | UserCountOutputTypeCountAnimeHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnimeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Anime
   */

  export type AggregateAnime = {
    _count: AnimeCountAggregateOutputType | null
    _avg: AnimeAvgAggregateOutputType | null
    _sum: AnimeSumAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  export type AnimeAvgAggregateOutputType = {
    anilist_id: number | null
    popularity: number | null
    duration: number | null
    episodes: number | null
    idMal: number | null
    trending: number | null
    relations: number | null
    Id: number | null
  }

  export type AnimeSumAggregateOutputType = {
    anilist_id: number | null
    popularity: number | null
    duration: number | null
    episodes: number | null
    idMal: number | null
    trending: number | null
    relations: number[]
    Id: number | null
  }

  export type AnimeMinAggregateOutputType = {
    anilist_id: number | null
    status: string | null
    popularity: number | null
    bannerImage: string | null
    coverImage: string | null
    description: string | null
    duration: number | null
    endDate: Date | null
    episodes: number | null
    description_fr: string | null
    format: string | null
    idMal: number | null
    isAdult: boolean | null
    startDate: Date | null
    trailer: string | null
    trending: number | null
    url_anime_sama: string | null
    url_fr_anime: string | null
    url_neko: string | null
    Id: number | null
    title: string | null
    titleenglish: string | null
    titleromanji: string | null
  }

  export type AnimeMaxAggregateOutputType = {
    anilist_id: number | null
    status: string | null
    popularity: number | null
    bannerImage: string | null
    coverImage: string | null
    description: string | null
    duration: number | null
    endDate: Date | null
    episodes: number | null
    description_fr: string | null
    format: string | null
    idMal: number | null
    isAdult: boolean | null
    startDate: Date | null
    trailer: string | null
    trending: number | null
    url_anime_sama: string | null
    url_fr_anime: string | null
    url_neko: string | null
    Id: number | null
    title: string | null
    titleenglish: string | null
    titleromanji: string | null
  }

  export type AnimeCountAggregateOutputType = {
    anilist_id: number
    status: number
    popularity: number
    genres: number
    bannerImage: number
    coverImage: number
    description: number
    duration: number
    endDate: number
    episodes: number
    description_fr: number
    format: number
    idMal: number
    isAdult: number
    startDate: number
    synonyms: number
    trailer: number
    trending: number
    url_anime_sama: number
    url_fr_anime: number
    url_neko: number
    relations: number
    Id: number
    title: number
    titleenglish: number
    titleromanji: number
    _all: number
  }


  export type AnimeAvgAggregateInputType = {
    anilist_id?: true
    popularity?: true
    duration?: true
    episodes?: true
    idMal?: true
    trending?: true
    relations?: true
    Id?: true
  }

  export type AnimeSumAggregateInputType = {
    anilist_id?: true
    popularity?: true
    duration?: true
    episodes?: true
    idMal?: true
    trending?: true
    relations?: true
    Id?: true
  }

  export type AnimeMinAggregateInputType = {
    anilist_id?: true
    status?: true
    popularity?: true
    bannerImage?: true
    coverImage?: true
    description?: true
    duration?: true
    endDate?: true
    episodes?: true
    description_fr?: true
    format?: true
    idMal?: true
    isAdult?: true
    startDate?: true
    trailer?: true
    trending?: true
    url_anime_sama?: true
    url_fr_anime?: true
    url_neko?: true
    Id?: true
    title?: true
    titleenglish?: true
    titleromanji?: true
  }

  export type AnimeMaxAggregateInputType = {
    anilist_id?: true
    status?: true
    popularity?: true
    bannerImage?: true
    coverImage?: true
    description?: true
    duration?: true
    endDate?: true
    episodes?: true
    description_fr?: true
    format?: true
    idMal?: true
    isAdult?: true
    startDate?: true
    trailer?: true
    trending?: true
    url_anime_sama?: true
    url_fr_anime?: true
    url_neko?: true
    Id?: true
    title?: true
    titleenglish?: true
    titleromanji?: true
  }

  export type AnimeCountAggregateInputType = {
    anilist_id?: true
    status?: true
    popularity?: true
    genres?: true
    bannerImage?: true
    coverImage?: true
    description?: true
    duration?: true
    endDate?: true
    episodes?: true
    description_fr?: true
    format?: true
    idMal?: true
    isAdult?: true
    startDate?: true
    synonyms?: true
    trailer?: true
    trending?: true
    url_anime_sama?: true
    url_fr_anime?: true
    url_neko?: true
    relations?: true
    Id?: true
    title?: true
    titleenglish?: true
    titleromanji?: true
    _all?: true
  }

  export type AnimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anime to aggregate.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationAndSearchRelevanceInput | AnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anime
    **/
    _count?: true | AnimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeMaxAggregateInputType
  }

  export type GetAnimeAggregateType<T extends AnimeAggregateArgs> = {
        [P in keyof T & keyof AggregateAnime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnime[P]>
      : GetScalarType<T[P], AggregateAnime[P]>
  }




  export type AnimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeWhereInput
    orderBy?: AnimeOrderByWithAggregationInput | AnimeOrderByWithAggregationInput[]
    by: AnimeScalarFieldEnum[] | AnimeScalarFieldEnum
    having?: AnimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeCountAggregateInputType | true
    _avg?: AnimeAvgAggregateInputType
    _sum?: AnimeSumAggregateInputType
    _min?: AnimeMinAggregateInputType
    _max?: AnimeMaxAggregateInputType
  }

  export type AnimeGroupByOutputType = {
    anilist_id: number | null
    status: string
    popularity: number
    genres: string[]
    bannerImage: string | null
    coverImage: string
    description: string | null
    duration: number | null
    endDate: Date | null
    episodes: number | null
    description_fr: string | null
    format: string
    idMal: number | null
    isAdult: boolean | null
    startDate: Date
    synonyms: string[]
    trailer: string
    trending: number
    url_anime_sama: string | null
    url_fr_anime: string | null
    url_neko: string | null
    relations: number[]
    Id: number
    title: string | null
    titleenglish: string | null
    titleromanji: string | null
    _count: AnimeCountAggregateOutputType | null
    _avg: AnimeAvgAggregateOutputType | null
    _sum: AnimeSumAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  type GetAnimeGroupByPayload<T extends AnimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeGroupByOutputType[P]>
        }
      >
    >


  export type AnimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    anilist_id?: boolean
    status?: boolean
    popularity?: boolean
    genres?: boolean
    bannerImage?: boolean
    coverImage?: boolean
    description?: boolean
    duration?: boolean
    endDate?: boolean
    episodes?: boolean
    description_fr?: boolean
    format?: boolean
    idMal?: boolean
    isAdult?: boolean
    startDate?: boolean
    synonyms?: boolean
    trailer?: boolean
    trending?: boolean
    url_anime_sama?: boolean
    url_fr_anime?: boolean
    url_neko?: boolean
    relations?: boolean
    Id?: boolean
    title?: boolean
    titleenglish?: boolean
    titleromanji?: boolean
    Episode?: boolean | Anime$EpisodeArgs<ExtArgs>
    Latest?: boolean | Anime$LatestArgs<ExtArgs>
    Tags?: boolean | Anime$TagsArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anime"]>

  export type AnimeSelectScalar = {
    anilist_id?: boolean
    status?: boolean
    popularity?: boolean
    genres?: boolean
    bannerImage?: boolean
    coverImage?: boolean
    description?: boolean
    duration?: boolean
    endDate?: boolean
    episodes?: boolean
    description_fr?: boolean
    format?: boolean
    idMal?: boolean
    isAdult?: boolean
    startDate?: boolean
    synonyms?: boolean
    trailer?: boolean
    trending?: boolean
    url_anime_sama?: boolean
    url_fr_anime?: boolean
    url_neko?: boolean
    relations?: boolean
    Id?: boolean
    title?: boolean
    titleenglish?: boolean
    titleromanji?: boolean
  }


  export type AnimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Episode?: boolean | Anime$EpisodeArgs<ExtArgs>
    Latest?: boolean | Anime$LatestArgs<ExtArgs>
    Tags?: boolean | Anime$TagsArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AnimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Anime"
    objects: {
      Episode: Prisma.$EpisodePayload<ExtArgs>[]
      Latest: Prisma.$LatestPayload<ExtArgs>[]
      Tags: Prisma.$TagsByAnimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      anilist_id: number | null
      status: string
      popularity: number
      genres: string[]
      bannerImage: string | null
      coverImage: string
      description: string | null
      duration: number | null
      endDate: Date | null
      episodes: number | null
      description_fr: string | null
      format: string
      idMal: number | null
      isAdult: boolean | null
      startDate: Date
      synonyms: string[]
      trailer: string
      trending: number
      url_anime_sama: string | null
      url_fr_anime: string | null
      url_neko: string | null
      relations: number[]
      Id: number
      title: string | null
      titleenglish: string | null
      titleromanji: string | null
    }, ExtArgs["result"]["anime"]>
    composites: {}
  }


  type AnimeGetPayload<S extends boolean | null | undefined | AnimeDefaultArgs> = $Result.GetResult<Prisma.$AnimePayload, S>

  type AnimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnimeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnimeCountAggregateInputType | true
    }

  export interface AnimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anime'], meta: { name: 'Anime' } }
    /**
     * Find zero or one Anime that matches the filter.
     * @param {AnimeFindUniqueArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnimeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeFindUniqueArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Anime that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnimeFindUniqueOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnimeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindFirstArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnimeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeFindFirstArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Anime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindFirstOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnimeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anime
     * const anime = await prisma.anime.findMany()
     * 
     * // Get first 10 Anime
     * const anime = await prisma.anime.findMany({ take: 10 })
     * 
     * // Only select the `anilist_id`
     * const animeWithAnilist_idOnly = await prisma.anime.findMany({ select: { anilist_id: true } })
     * 
    **/
    findMany<T extends AnimeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Anime.
     * @param {AnimeCreateArgs} args - Arguments to create a Anime.
     * @example
     * // Create one Anime
     * const Anime = await prisma.anime.create({
     *   data: {
     *     // ... data to create a Anime
     *   }
     * })
     * 
    **/
    create<T extends AnimeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeCreateArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Anime.
     *     @param {AnimeCreateManyArgs} args - Arguments to create many Anime.
     *     @example
     *     // Create many Anime
     *     const anime = await prisma.anime.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnimeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Anime.
     * @param {AnimeDeleteArgs} args - Arguments to delete one Anime.
     * @example
     * // Delete one Anime
     * const Anime = await prisma.anime.delete({
     *   where: {
     *     // ... filter to delete one Anime
     *   }
     * })
     * 
    **/
    delete<T extends AnimeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeDeleteArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Anime.
     * @param {AnimeUpdateArgs} args - Arguments to update one Anime.
     * @example
     * // Update one Anime
     * const anime = await prisma.anime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnimeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeUpdateArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Anime.
     * @param {AnimeDeleteManyArgs} args - Arguments to filter Anime to delete.
     * @example
     * // Delete a few Anime
     * const { count } = await prisma.anime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnimeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anime
     * const anime = await prisma.anime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnimeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Anime.
     * @param {AnimeUpsertArgs} args - Arguments to update or create a Anime.
     * @example
     * // Update or create a Anime
     * const anime = await prisma.anime.upsert({
     *   create: {
     *     // ... data to create a Anime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anime we want to update
     *   }
     * })
    **/
    upsert<T extends AnimeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeUpsertArgs<ExtArgs>>
    ): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeCountArgs} args - Arguments to filter Anime to count.
     * @example
     * // Count the number of Anime
     * const count = await prisma.anime.count({
     *   where: {
     *     // ... the filter for the Anime we want to count
     *   }
     * })
    **/
    count<T extends AnimeCountArgs>(
      args?: Subset<T, AnimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnimeAggregateArgs>(args: Subset<T, AnimeAggregateArgs>): Prisma.PrismaPromise<GetAnimeAggregateType<T>>

    /**
     * Group by Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeGroupByArgs['orderBy'] }
        : { orderBy?: AnimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anime model
   */
  readonly fields: AnimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Episode<T extends Anime$EpisodeArgs<ExtArgs> = {}>(args?: Subset<T, Anime$EpisodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findMany'> | Null>;

    Latest<T extends Anime$LatestArgs<ExtArgs> = {}>(args?: Subset<T, Anime$LatestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findMany'> | Null>;

    Tags<T extends Anime$TagsArgs<ExtArgs> = {}>(args?: Subset<T, Anime$TagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsByAnimePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Anime model
   */ 
  interface AnimeFieldRefs {
    readonly anilist_id: FieldRef<"Anime", 'Int'>
    readonly status: FieldRef<"Anime", 'String'>
    readonly popularity: FieldRef<"Anime", 'Int'>
    readonly genres: FieldRef<"Anime", 'String[]'>
    readonly bannerImage: FieldRef<"Anime", 'String'>
    readonly coverImage: FieldRef<"Anime", 'String'>
    readonly description: FieldRef<"Anime", 'String'>
    readonly duration: FieldRef<"Anime", 'Int'>
    readonly endDate: FieldRef<"Anime", 'DateTime'>
    readonly episodes: FieldRef<"Anime", 'Int'>
    readonly description_fr: FieldRef<"Anime", 'String'>
    readonly format: FieldRef<"Anime", 'String'>
    readonly idMal: FieldRef<"Anime", 'Int'>
    readonly isAdult: FieldRef<"Anime", 'Boolean'>
    readonly startDate: FieldRef<"Anime", 'DateTime'>
    readonly synonyms: FieldRef<"Anime", 'String[]'>
    readonly trailer: FieldRef<"Anime", 'String'>
    readonly trending: FieldRef<"Anime", 'Int'>
    readonly url_anime_sama: FieldRef<"Anime", 'String'>
    readonly url_fr_anime: FieldRef<"Anime", 'String'>
    readonly url_neko: FieldRef<"Anime", 'String'>
    readonly relations: FieldRef<"Anime", 'Int[]'>
    readonly Id: FieldRef<"Anime", 'Int'>
    readonly title: FieldRef<"Anime", 'String'>
    readonly titleenglish: FieldRef<"Anime", 'String'>
    readonly titleromanji: FieldRef<"Anime", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Anime findUnique
   */
  export type AnimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime findUniqueOrThrow
   */
  export type AnimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime findFirst
   */
  export type AnimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationAndSearchRelevanceInput | AnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime findFirstOrThrow
   */
  export type AnimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationAndSearchRelevanceInput | AnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime findMany
   */
  export type AnimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationAndSearchRelevanceInput | AnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime create
   */
  export type AnimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The data needed to create a Anime.
     */
    data: XOR<AnimeCreateInput, AnimeUncheckedCreateInput>
  }

  /**
   * Anime createMany
   */
  export type AnimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anime.
     */
    data: AnimeCreateManyInput | AnimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anime update
   */
  export type AnimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The data needed to update a Anime.
     */
    data: XOR<AnimeUpdateInput, AnimeUncheckedUpdateInput>
    /**
     * Choose, which Anime to update.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime updateMany
   */
  export type AnimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anime.
     */
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyInput>
    /**
     * Filter which Anime to update
     */
    where?: AnimeWhereInput
  }

  /**
   * Anime upsert
   */
  export type AnimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The filter to search for the Anime to update in case it exists.
     */
    where: AnimeWhereUniqueInput
    /**
     * In case the Anime found by the `where` argument doesn't exist, create a new Anime with this data.
     */
    create: XOR<AnimeCreateInput, AnimeUncheckedCreateInput>
    /**
     * In case the Anime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeUpdateInput, AnimeUncheckedUpdateInput>
  }

  /**
   * Anime delete
   */
  export type AnimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter which Anime to delete.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime deleteMany
   */
  export type AnimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anime to delete
     */
    where?: AnimeWhereInput
  }

  /**
   * Anime.Episode
   */
  export type Anime$EpisodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput | EpisodeOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Anime.Latest
   */
  export type Anime$LatestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LatestInclude<ExtArgs> | null
    where?: LatestWhereInput
    orderBy?: LatestOrderByWithRelationAndSearchRelevanceInput | LatestOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: LatestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LatestScalarFieldEnum | LatestScalarFieldEnum[]
  }

  /**
   * Anime.Tags
   */
  export type Anime$TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
    where?: TagsByAnimeWhereInput
    orderBy?: TagsByAnimeOrderByWithRelationAndSearchRelevanceInput | TagsByAnimeOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: TagsByAnimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsByAnimeScalarFieldEnum | TagsByAnimeScalarFieldEnum[]
  }

  /**
   * Anime without action
   */
  export type AnimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
  }


  /**
   * Model AnimeHistory
   */

  export type AggregateAnimeHistory = {
    _count: AnimeHistoryCountAggregateOutputType | null
    _avg: AnimeHistoryAvgAggregateOutputType | null
    _sum: AnimeHistorySumAggregateOutputType | null
    _min: AnimeHistoryMinAggregateOutputType | null
    _max: AnimeHistoryMaxAggregateOutputType | null
  }

  export type AnimeHistoryAvgAggregateOutputType = {
    id: number | null
    timestamp: number | null
    duration: number | null
    episode_id: number | null
    user_id: number | null
  }

  export type AnimeHistorySumAggregateOutputType = {
    id: number | null
    timestamp: number | null
    duration: number | null
    episode_id: number | null
    user_id: number | null
  }

  export type AnimeHistoryMinAggregateOutputType = {
    id: number | null
    timestamp: number | null
    duration: number | null
    episode_id: number | null
    user_id: number | null
  }

  export type AnimeHistoryMaxAggregateOutputType = {
    id: number | null
    timestamp: number | null
    duration: number | null
    episode_id: number | null
    user_id: number | null
  }

  export type AnimeHistoryCountAggregateOutputType = {
    id: number
    timestamp: number
    duration: number
    episode_id: number
    user_id: number
    _all: number
  }


  export type AnimeHistoryAvgAggregateInputType = {
    id?: true
    timestamp?: true
    duration?: true
    episode_id?: true
    user_id?: true
  }

  export type AnimeHistorySumAggregateInputType = {
    id?: true
    timestamp?: true
    duration?: true
    episode_id?: true
    user_id?: true
  }

  export type AnimeHistoryMinAggregateInputType = {
    id?: true
    timestamp?: true
    duration?: true
    episode_id?: true
    user_id?: true
  }

  export type AnimeHistoryMaxAggregateInputType = {
    id?: true
    timestamp?: true
    duration?: true
    episode_id?: true
    user_id?: true
  }

  export type AnimeHistoryCountAggregateInputType = {
    id?: true
    timestamp?: true
    duration?: true
    episode_id?: true
    user_id?: true
    _all?: true
  }

  export type AnimeHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeHistory to aggregate.
     */
    where?: AnimeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeHistories to fetch.
     */
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeHistories
    **/
    _count?: true | AnimeHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimeHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimeHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeHistoryMaxAggregateInputType
  }

  export type GetAnimeHistoryAggregateType<T extends AnimeHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeHistory[P]>
      : GetScalarType<T[P], AggregateAnimeHistory[P]>
  }




  export type AnimeHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeHistoryWhereInput
    orderBy?: AnimeHistoryOrderByWithAggregationInput | AnimeHistoryOrderByWithAggregationInput[]
    by: AnimeHistoryScalarFieldEnum[] | AnimeHistoryScalarFieldEnum
    having?: AnimeHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeHistoryCountAggregateInputType | true
    _avg?: AnimeHistoryAvgAggregateInputType
    _sum?: AnimeHistorySumAggregateInputType
    _min?: AnimeHistoryMinAggregateInputType
    _max?: AnimeHistoryMaxAggregateInputType
  }

  export type AnimeHistoryGroupByOutputType = {
    id: number
    timestamp: number
    duration: number
    episode_id: number
    user_id: number
    _count: AnimeHistoryCountAggregateOutputType | null
    _avg: AnimeHistoryAvgAggregateOutputType | null
    _sum: AnimeHistorySumAggregateOutputType | null
    _min: AnimeHistoryMinAggregateOutputType | null
    _max: AnimeHistoryMaxAggregateOutputType | null
  }

  type GetAnimeHistoryGroupByPayload<T extends AnimeHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeHistoryGroupByOutputType[P]>
        }
      >
    >


  export type AnimeHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    duration?: boolean
    episode_id?: boolean
    user_id?: boolean
    Episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeHistory"]>

  export type AnimeHistorySelectScalar = {
    id?: boolean
    timestamp?: boolean
    duration?: boolean
    episode_id?: boolean
    user_id?: boolean
  }


  export type AnimeHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AnimeHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeHistory"
    objects: {
      Episode: Prisma.$EpisodePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: number
      duration: number
      episode_id: number
      user_id: number
    }, ExtArgs["result"]["animeHistory"]>
    composites: {}
  }


  type AnimeHistoryGetPayload<S extends boolean | null | undefined | AnimeHistoryDefaultArgs> = $Result.GetResult<Prisma.$AnimeHistoryPayload, S>

  type AnimeHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnimeHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnimeHistoryCountAggregateInputType | true
    }

  export interface AnimeHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeHistory'], meta: { name: 'AnimeHistory' } }
    /**
     * Find zero or one AnimeHistory that matches the filter.
     * @param {AnimeHistoryFindUniqueArgs} args - Arguments to find a AnimeHistory
     * @example
     * // Get one AnimeHistory
     * const animeHistory = await prisma.animeHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnimeHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AnimeHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnimeHistoryFindUniqueOrThrowArgs} args - Arguments to find a AnimeHistory
     * @example
     * // Get one AnimeHistory
     * const animeHistory = await prisma.animeHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnimeHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AnimeHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryFindFirstArgs} args - Arguments to find a AnimeHistory
     * @example
     * // Get one AnimeHistory
     * const animeHistory = await prisma.animeHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnimeHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AnimeHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryFindFirstOrThrowArgs} args - Arguments to find a AnimeHistory
     * @example
     * // Get one AnimeHistory
     * const animeHistory = await prisma.animeHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnimeHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AnimeHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeHistories
     * const animeHistories = await prisma.animeHistory.findMany()
     * 
     * // Get first 10 AnimeHistories
     * const animeHistories = await prisma.animeHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeHistoryWithIdOnly = await prisma.animeHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnimeHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AnimeHistory.
     * @param {AnimeHistoryCreateArgs} args - Arguments to create a AnimeHistory.
     * @example
     * // Create one AnimeHistory
     * const AnimeHistory = await prisma.animeHistory.create({
     *   data: {
     *     // ... data to create a AnimeHistory
     *   }
     * })
     * 
    **/
    create<T extends AnimeHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryCreateArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AnimeHistories.
     *     @param {AnimeHistoryCreateManyArgs} args - Arguments to create many AnimeHistories.
     *     @example
     *     // Create many AnimeHistories
     *     const animeHistory = await prisma.animeHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnimeHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AnimeHistory.
     * @param {AnimeHistoryDeleteArgs} args - Arguments to delete one AnimeHistory.
     * @example
     * // Delete one AnimeHistory
     * const AnimeHistory = await prisma.animeHistory.delete({
     *   where: {
     *     // ... filter to delete one AnimeHistory
     *   }
     * })
     * 
    **/
    delete<T extends AnimeHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryDeleteArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AnimeHistory.
     * @param {AnimeHistoryUpdateArgs} args - Arguments to update one AnimeHistory.
     * @example
     * // Update one AnimeHistory
     * const animeHistory = await prisma.animeHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnimeHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryUpdateArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AnimeHistories.
     * @param {AnimeHistoryDeleteManyArgs} args - Arguments to filter AnimeHistories to delete.
     * @example
     * // Delete a few AnimeHistories
     * const { count } = await prisma.animeHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnimeHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimeHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeHistories
     * const animeHistory = await prisma.animeHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnimeHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnimeHistory.
     * @param {AnimeHistoryUpsertArgs} args - Arguments to update or create a AnimeHistory.
     * @example
     * // Update or create a AnimeHistory
     * const animeHistory = await prisma.animeHistory.upsert({
     *   create: {
     *     // ... data to create a AnimeHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeHistory we want to update
     *   }
     * })
    **/
    upsert<T extends AnimeHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnimeHistoryUpsertArgs<ExtArgs>>
    ): Prisma__AnimeHistoryClient<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AnimeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryCountArgs} args - Arguments to filter AnimeHistories to count.
     * @example
     * // Count the number of AnimeHistories
     * const count = await prisma.animeHistory.count({
     *   where: {
     *     // ... the filter for the AnimeHistories we want to count
     *   }
     * })
    **/
    count<T extends AnimeHistoryCountArgs>(
      args?: Subset<T, AnimeHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnimeHistoryAggregateArgs>(args: Subset<T, AnimeHistoryAggregateArgs>): Prisma.PrismaPromise<GetAnimeHistoryAggregateType<T>>

    /**
     * Group by AnimeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnimeHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeHistoryGroupByArgs['orderBy'] }
        : { orderBy?: AnimeHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnimeHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeHistory model
   */
  readonly fields: AnimeHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Episode<T extends EpisodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpisodeDefaultArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AnimeHistory model
   */ 
  interface AnimeHistoryFieldRefs {
    readonly id: FieldRef<"AnimeHistory", 'Int'>
    readonly timestamp: FieldRef<"AnimeHistory", 'Int'>
    readonly duration: FieldRef<"AnimeHistory", 'Int'>
    readonly episode_id: FieldRef<"AnimeHistory", 'Int'>
    readonly user_id: FieldRef<"AnimeHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AnimeHistory findUnique
   */
  export type AnimeHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeHistory to fetch.
     */
    where: AnimeHistoryWhereUniqueInput
  }

  /**
   * AnimeHistory findUniqueOrThrow
   */
  export type AnimeHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeHistory to fetch.
     */
    where: AnimeHistoryWhereUniqueInput
  }

  /**
   * AnimeHistory findFirst
   */
  export type AnimeHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeHistory to fetch.
     */
    where?: AnimeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeHistories to fetch.
     */
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeHistories.
     */
    cursor?: AnimeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeHistories.
     */
    distinct?: AnimeHistoryScalarFieldEnum | AnimeHistoryScalarFieldEnum[]
  }

  /**
   * AnimeHistory findFirstOrThrow
   */
  export type AnimeHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeHistory to fetch.
     */
    where?: AnimeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeHistories to fetch.
     */
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeHistories.
     */
    cursor?: AnimeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeHistories.
     */
    distinct?: AnimeHistoryScalarFieldEnum | AnimeHistoryScalarFieldEnum[]
  }

  /**
   * AnimeHistory findMany
   */
  export type AnimeHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeHistories to fetch.
     */
    where?: AnimeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeHistories to fetch.
     */
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeHistories.
     */
    cursor?: AnimeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeHistories.
     */
    skip?: number
    distinct?: AnimeHistoryScalarFieldEnum | AnimeHistoryScalarFieldEnum[]
  }

  /**
   * AnimeHistory create
   */
  export type AnimeHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeHistory.
     */
    data: XOR<AnimeHistoryCreateInput, AnimeHistoryUncheckedCreateInput>
  }

  /**
   * AnimeHistory createMany
   */
  export type AnimeHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeHistories.
     */
    data: AnimeHistoryCreateManyInput | AnimeHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeHistory update
   */
  export type AnimeHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeHistory.
     */
    data: XOR<AnimeHistoryUpdateInput, AnimeHistoryUncheckedUpdateInput>
    /**
     * Choose, which AnimeHistory to update.
     */
    where: AnimeHistoryWhereUniqueInput
  }

  /**
   * AnimeHistory updateMany
   */
  export type AnimeHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeHistories.
     */
    data: XOR<AnimeHistoryUpdateManyMutationInput, AnimeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AnimeHistories to update
     */
    where?: AnimeHistoryWhereInput
  }

  /**
   * AnimeHistory upsert
   */
  export type AnimeHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeHistory to update in case it exists.
     */
    where: AnimeHistoryWhereUniqueInput
    /**
     * In case the AnimeHistory found by the `where` argument doesn't exist, create a new AnimeHistory with this data.
     */
    create: XOR<AnimeHistoryCreateInput, AnimeHistoryUncheckedCreateInput>
    /**
     * In case the AnimeHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeHistoryUpdateInput, AnimeHistoryUncheckedUpdateInput>
  }

  /**
   * AnimeHistory delete
   */
  export type AnimeHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    /**
     * Filter which AnimeHistory to delete.
     */
    where: AnimeHistoryWhereUniqueInput
  }

  /**
   * AnimeHistory deleteMany
   */
  export type AnimeHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeHistories to delete
     */
    where?: AnimeHistoryWhereInput
  }

  /**
   * AnimeHistory without action
   */
  export type AnimeHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    id: number | null
    num: number | null
    anime_id: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    id: number | null
    num: number | null
    anime_id: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: number | null
    time: string | null
    episode: string | null
    num: number | null
    url: string | null
    url_image: string | null
    anime_id: number | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: number | null
    time: string | null
    episode: string | null
    num: number | null
    url: string | null
    url_image: string | null
    anime_id: number | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    time: number
    episode: number
    num: number
    url: number
    url_image: number
    anime_id: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    id?: true
    num?: true
    anime_id?: true
  }

  export type EpisodeSumAggregateInputType = {
    id?: true
    num?: true
    anime_id?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    time?: true
    episode?: true
    num?: true
    url?: true
    url_image?: true
    anime_id?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    time?: true
    episode?: true
    num?: true
    url?: true
    url_image?: true
    anime_id?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    time?: true
    episode?: true
    num?: true
    url?: true
    url_image?: true
    anime_id?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput | EpisodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    anime_id: number
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    episode?: boolean
    num?: boolean
    url?: boolean
    url_image?: boolean
    anime_id?: boolean
    AnimeHistory?: boolean | Episode$AnimeHistoryArgs<ExtArgs>
    Anime?: boolean | AnimeDefaultArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    time?: boolean
    episode?: boolean
    num?: boolean
    url?: boolean
    url_image?: boolean
    anime_id?: boolean
  }


  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AnimeHistory?: boolean | Episode$AnimeHistoryArgs<ExtArgs>
    Anime?: boolean | AnimeDefaultArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      AnimeHistory: Prisma.$AnimeHistoryPayload<ExtArgs>[]
      Anime: Prisma.$AnimePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      time: string
      episode: string
      num: number
      url: string
      url_image: string
      anime_id: number
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }


  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EpisodeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Episode that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EpisodeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EpisodeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
    **/
    create<T extends EpisodeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Episodes.
     *     @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     *     @example
     *     // Create many Episodes
     *     const episode = await prisma.episode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EpisodeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
    **/
    delete<T extends EpisodeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EpisodeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EpisodeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EpisodeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
    **/
    upsert<T extends EpisodeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>
    ): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    AnimeHistory<T extends Episode$AnimeHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Episode$AnimeHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    Anime<T extends AnimeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeDefaultArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Episode model
   */ 
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'Int'>
    readonly time: FieldRef<"Episode", 'String'>
    readonly episode: FieldRef<"Episode", 'String'>
    readonly num: FieldRef<"Episode", 'Int'>
    readonly url: FieldRef<"Episode", 'String'>
    readonly url_image: FieldRef<"Episode", 'String'>
    readonly anime_id: FieldRef<"Episode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput | EpisodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput | EpisodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput | EpisodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }

  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
  }

  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }

  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
  }

  /**
   * Episode.AnimeHistory
   */
  export type Episode$AnimeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    where?: AnimeHistoryWhereInput
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: AnimeHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeHistoryScalarFieldEnum | AnimeHistoryScalarFieldEnum[]
  }

  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
  }


  /**
   * Model Latest
   */

  export type AggregateLatest = {
    _count: LatestCountAggregateOutputType | null
    _avg: LatestAvgAggregateOutputType | null
    _sum: LatestSumAggregateOutputType | null
    _min: LatestMinAggregateOutputType | null
    _max: LatestMaxAggregateOutputType | null
  }

  export type LatestAvgAggregateOutputType = {
    id: number | null
    anime_id: number | null
  }

  export type LatestSumAggregateOutputType = {
    id: number | null
    anime_id: number | null
  }

  export type LatestMinAggregateOutputType = {
    id: number | null
    timestamp: string | null
    episode: string | null
    lang: string | null
    anime_url: string | null
    anime_id: number | null
  }

  export type LatestMaxAggregateOutputType = {
    id: number | null
    timestamp: string | null
    episode: string | null
    lang: string | null
    anime_url: string | null
    anime_id: number | null
  }

  export type LatestCountAggregateOutputType = {
    id: number
    timestamp: number
    episode: number
    lang: number
    anime_url: number
    anime_id: number
    _all: number
  }


  export type LatestAvgAggregateInputType = {
    id?: true
    anime_id?: true
  }

  export type LatestSumAggregateInputType = {
    id?: true
    anime_id?: true
  }

  export type LatestMinAggregateInputType = {
    id?: true
    timestamp?: true
    episode?: true
    lang?: true
    anime_url?: true
    anime_id?: true
  }

  export type LatestMaxAggregateInputType = {
    id?: true
    timestamp?: true
    episode?: true
    lang?: true
    anime_url?: true
    anime_id?: true
  }

  export type LatestCountAggregateInputType = {
    id?: true
    timestamp?: true
    episode?: true
    lang?: true
    anime_url?: true
    anime_id?: true
    _all?: true
  }

  export type LatestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Latest to aggregate.
     */
    where?: LatestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Latests to fetch.
     */
    orderBy?: LatestOrderByWithRelationAndSearchRelevanceInput | LatestOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LatestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Latests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Latests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Latests
    **/
    _count?: true | LatestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LatestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LatestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LatestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LatestMaxAggregateInputType
  }

  export type GetLatestAggregateType<T extends LatestAggregateArgs> = {
        [P in keyof T & keyof AggregateLatest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLatest[P]>
      : GetScalarType<T[P], AggregateLatest[P]>
  }




  export type LatestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LatestWhereInput
    orderBy?: LatestOrderByWithAggregationInput | LatestOrderByWithAggregationInput[]
    by: LatestScalarFieldEnum[] | LatestScalarFieldEnum
    having?: LatestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LatestCountAggregateInputType | true
    _avg?: LatestAvgAggregateInputType
    _sum?: LatestSumAggregateInputType
    _min?: LatestMinAggregateInputType
    _max?: LatestMaxAggregateInputType
  }

  export type LatestGroupByOutputType = {
    id: number
    timestamp: string
    episode: string
    lang: string
    anime_url: string
    anime_id: number
    _count: LatestCountAggregateOutputType | null
    _avg: LatestAvgAggregateOutputType | null
    _sum: LatestSumAggregateOutputType | null
    _min: LatestMinAggregateOutputType | null
    _max: LatestMaxAggregateOutputType | null
  }

  type GetLatestGroupByPayload<T extends LatestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LatestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LatestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LatestGroupByOutputType[P]>
            : GetScalarType<T[P], LatestGroupByOutputType[P]>
        }
      >
    >


  export type LatestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    episode?: boolean
    lang?: boolean
    anime_url?: boolean
    anime_id?: boolean
    Anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["latest"]>

  export type LatestSelectScalar = {
    id?: boolean
    timestamp?: boolean
    episode?: boolean
    lang?: boolean
    anime_url?: boolean
    anime_id?: boolean
  }


  export type LatestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }


  export type $LatestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Latest"
    objects: {
      Anime: Prisma.$AnimePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: string
      episode: string
      lang: string
      anime_url: string
      anime_id: number
    }, ExtArgs["result"]["latest"]>
    composites: {}
  }


  type LatestGetPayload<S extends boolean | null | undefined | LatestDefaultArgs> = $Result.GetResult<Prisma.$LatestPayload, S>

  type LatestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LatestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LatestCountAggregateInputType | true
    }

  export interface LatestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Latest'], meta: { name: 'Latest' } }
    /**
     * Find zero or one Latest that matches the filter.
     * @param {LatestFindUniqueArgs} args - Arguments to find a Latest
     * @example
     * // Get one Latest
     * const latest = await prisma.latest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LatestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LatestFindUniqueArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Latest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LatestFindUniqueOrThrowArgs} args - Arguments to find a Latest
     * @example
     * // Get one Latest
     * const latest = await prisma.latest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LatestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Latest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestFindFirstArgs} args - Arguments to find a Latest
     * @example
     * // Get one Latest
     * const latest = await prisma.latest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LatestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestFindFirstArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Latest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestFindFirstOrThrowArgs} args - Arguments to find a Latest
     * @example
     * // Get one Latest
     * const latest = await prisma.latest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LatestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Latests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Latests
     * const latests = await prisma.latest.findMany()
     * 
     * // Get first 10 Latests
     * const latests = await prisma.latest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const latestWithIdOnly = await prisma.latest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LatestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Latest.
     * @param {LatestCreateArgs} args - Arguments to create a Latest.
     * @example
     * // Create one Latest
     * const Latest = await prisma.latest.create({
     *   data: {
     *     // ... data to create a Latest
     *   }
     * })
     * 
    **/
    create<T extends LatestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LatestCreateArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Latests.
     *     @param {LatestCreateManyArgs} args - Arguments to create many Latests.
     *     @example
     *     // Create many Latests
     *     const latest = await prisma.latest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LatestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Latest.
     * @param {LatestDeleteArgs} args - Arguments to delete one Latest.
     * @example
     * // Delete one Latest
     * const Latest = await prisma.latest.delete({
     *   where: {
     *     // ... filter to delete one Latest
     *   }
     * })
     * 
    **/
    delete<T extends LatestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LatestDeleteArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Latest.
     * @param {LatestUpdateArgs} args - Arguments to update one Latest.
     * @example
     * // Update one Latest
     * const latest = await prisma.latest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LatestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LatestUpdateArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Latests.
     * @param {LatestDeleteManyArgs} args - Arguments to filter Latests to delete.
     * @example
     * // Delete a few Latests
     * const { count } = await prisma.latest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LatestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LatestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Latests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Latests
     * const latest = await prisma.latest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LatestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LatestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Latest.
     * @param {LatestUpsertArgs} args - Arguments to update or create a Latest.
     * @example
     * // Update or create a Latest
     * const latest = await prisma.latest.upsert({
     *   create: {
     *     // ... data to create a Latest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Latest we want to update
     *   }
     * })
    **/
    upsert<T extends LatestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LatestUpsertArgs<ExtArgs>>
    ): Prisma__LatestClient<$Result.GetResult<Prisma.$LatestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Latests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestCountArgs} args - Arguments to filter Latests to count.
     * @example
     * // Count the number of Latests
     * const count = await prisma.latest.count({
     *   where: {
     *     // ... the filter for the Latests we want to count
     *   }
     * })
    **/
    count<T extends LatestCountArgs>(
      args?: Subset<T, LatestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LatestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Latest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LatestAggregateArgs>(args: Subset<T, LatestAggregateArgs>): Prisma.PrismaPromise<GetLatestAggregateType<T>>

    /**
     * Group by Latest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LatestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LatestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LatestGroupByArgs['orderBy'] }
        : { orderBy?: LatestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LatestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLatestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Latest model
   */
  readonly fields: LatestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Latest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LatestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Anime<T extends AnimeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeDefaultArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Latest model
   */ 
  interface LatestFieldRefs {
    readonly id: FieldRef<"Latest", 'Int'>
    readonly timestamp: FieldRef<"Latest", 'String'>
    readonly episode: FieldRef<"Latest", 'String'>
    readonly lang: FieldRef<"Latest", 'String'>
    readonly anime_url: FieldRef<"Latest", 'String'>
    readonly anime_id: FieldRef<"Latest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Latest findUnique
   */
  export type LatestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter, which Latest to fetch.
     */
    where: LatestWhereUniqueInput
  }

  /**
   * Latest findUniqueOrThrow
   */
  export type LatestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter, which Latest to fetch.
     */
    where: LatestWhereUniqueInput
  }

  /**
   * Latest findFirst
   */
  export type LatestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter, which Latest to fetch.
     */
    where?: LatestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Latests to fetch.
     */
    orderBy?: LatestOrderByWithRelationAndSearchRelevanceInput | LatestOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Latests.
     */
    cursor?: LatestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Latests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Latests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Latests.
     */
    distinct?: LatestScalarFieldEnum | LatestScalarFieldEnum[]
  }

  /**
   * Latest findFirstOrThrow
   */
  export type LatestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter, which Latest to fetch.
     */
    where?: LatestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Latests to fetch.
     */
    orderBy?: LatestOrderByWithRelationAndSearchRelevanceInput | LatestOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Latests.
     */
    cursor?: LatestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Latests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Latests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Latests.
     */
    distinct?: LatestScalarFieldEnum | LatestScalarFieldEnum[]
  }

  /**
   * Latest findMany
   */
  export type LatestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter, which Latests to fetch.
     */
    where?: LatestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Latests to fetch.
     */
    orderBy?: LatestOrderByWithRelationAndSearchRelevanceInput | LatestOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Latests.
     */
    cursor?: LatestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Latests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Latests.
     */
    skip?: number
    distinct?: LatestScalarFieldEnum | LatestScalarFieldEnum[]
  }

  /**
   * Latest create
   */
  export type LatestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * The data needed to create a Latest.
     */
    data: XOR<LatestCreateInput, LatestUncheckedCreateInput>
  }

  /**
   * Latest createMany
   */
  export type LatestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Latests.
     */
    data: LatestCreateManyInput | LatestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Latest update
   */
  export type LatestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * The data needed to update a Latest.
     */
    data: XOR<LatestUpdateInput, LatestUncheckedUpdateInput>
    /**
     * Choose, which Latest to update.
     */
    where: LatestWhereUniqueInput
  }

  /**
   * Latest updateMany
   */
  export type LatestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Latests.
     */
    data: XOR<LatestUpdateManyMutationInput, LatestUncheckedUpdateManyInput>
    /**
     * Filter which Latests to update
     */
    where?: LatestWhereInput
  }

  /**
   * Latest upsert
   */
  export type LatestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * The filter to search for the Latest to update in case it exists.
     */
    where: LatestWhereUniqueInput
    /**
     * In case the Latest found by the `where` argument doesn't exist, create a new Latest with this data.
     */
    create: XOR<LatestCreateInput, LatestUncheckedCreateInput>
    /**
     * In case the Latest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LatestUpdateInput, LatestUncheckedUpdateInput>
  }

  /**
   * Latest delete
   */
  export type LatestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LatestInclude<ExtArgs> | null
    /**
     * Filter which Latest to delete.
     */
    where: LatestWhereUniqueInput
  }

  /**
   * Latest deleteMany
   */
  export type LatestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Latests to delete
     */
    where?: LatestWhereInput
  }

  /**
   * Latest without action
   */
  export type LatestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Latest
     */
    select?: LatestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LatestInclude<ExtArgs> | null
  }


  /**
   * Model Tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to aggregate.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationAndSearchRelevanceInput | TagsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type TagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsWhereInput
    orderBy?: TagsOrderByWithAggregationInput | TagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: TagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: number
    name: string
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends TagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type TagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    TagsByAnime?: boolean | Tags$TagsByAnimeArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectScalar = {
    id?: boolean
    name?: boolean
  }


  export type TagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TagsByAnime?: boolean | Tags$TagsByAnimeArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tags"
    objects: {
      TagsByAnime: Prisma.$TagsByAnimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }


  type TagsGetPayload<S extends boolean | null | undefined | TagsDefaultArgs> = $Result.GetResult<Prisma.$TagsPayload, S>

  type TagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface TagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tags'], meta: { name: 'Tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {TagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TagsFindUniqueArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tags that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindFirstArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tags.
     * @param {TagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
    **/
    create<T extends TagsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsCreateArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tags.
     *     @param {TagsCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tags = await prisma.tags.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tags.
     * @param {TagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
    **/
    delete<T extends TagsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TagsDeleteArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tags.
     * @param {TagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpdateArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tags.
     * @param {TagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
    **/
    upsert<T extends TagsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TagsUpsertArgs<ExtArgs>>
    ): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagsCountArgs>(
      args?: Subset<T, TagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsGroupByArgs['orderBy'] }
        : { orderBy?: TagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tags model
   */
  readonly fields: TagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    TagsByAnime<T extends Tags$TagsByAnimeArgs<ExtArgs> = {}>(args?: Subset<T, Tags$TagsByAnimeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsByAnimePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tags model
   */ 
  interface TagsFieldRefs {
    readonly id: FieldRef<"Tags", 'Int'>
    readonly name: FieldRef<"Tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tags findUnique
   */
  export type TagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findUniqueOrThrow
   */
  export type TagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags findFirst
   */
  export type TagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationAndSearchRelevanceInput | TagsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findFirstOrThrow
   */
  export type TagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationAndSearchRelevanceInput | TagsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags findMany
   */
  export type TagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagsOrderByWithRelationAndSearchRelevanceInput | TagsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * Tags create
   */
  export type TagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tags.
     */
    data: XOR<TagsCreateInput, TagsUncheckedCreateInput>
  }

  /**
   * Tags createMany
   */
  export type TagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagsCreateManyInput | TagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tags update
   */
  export type TagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tags.
     */
    data: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
    /**
     * Choose, which Tags to update.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags updateMany
   */
  export type TagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagsUpdateManyMutationInput, TagsUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagsWhereInput
  }

  /**
   * Tags upsert
   */
  export type TagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tags to update in case it exists.
     */
    where: TagsWhereUniqueInput
    /**
     * In case the Tags found by the `where` argument doesn't exist, create a new Tags with this data.
     */
    create: XOR<TagsCreateInput, TagsUncheckedCreateInput>
    /**
     * In case the Tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsUpdateInput, TagsUncheckedUpdateInput>
  }

  /**
   * Tags delete
   */
  export type TagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
    /**
     * Filter which Tags to delete.
     */
    where: TagsWhereUniqueInput
  }

  /**
   * Tags deleteMany
   */
  export type TagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagsWhereInput
  }

  /**
   * Tags.TagsByAnime
   */
  export type Tags$TagsByAnimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
    where?: TagsByAnimeWhereInput
    orderBy?: TagsByAnimeOrderByWithRelationAndSearchRelevanceInput | TagsByAnimeOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: TagsByAnimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsByAnimeScalarFieldEnum | TagsByAnimeScalarFieldEnum[]
  }

  /**
   * Tags without action
   */
  export type TagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsInclude<ExtArgs> | null
  }


  /**
   * Model TagsByAnime
   */

  export type AggregateTagsByAnime = {
    _count: TagsByAnimeCountAggregateOutputType | null
    _avg: TagsByAnimeAvgAggregateOutputType | null
    _sum: TagsByAnimeSumAggregateOutputType | null
    _min: TagsByAnimeMinAggregateOutputType | null
    _max: TagsByAnimeMaxAggregateOutputType | null
  }

  export type TagsByAnimeAvgAggregateOutputType = {
    id: number | null
    tagId: number | null
    rank: number | null
    animeId: number | null
  }

  export type TagsByAnimeSumAggregateOutputType = {
    id: number | null
    tagId: number | null
    rank: number | null
    animeId: number | null
  }

  export type TagsByAnimeMinAggregateOutputType = {
    id: number | null
    tagId: number | null
    rank: number | null
    animeId: number | null
  }

  export type TagsByAnimeMaxAggregateOutputType = {
    id: number | null
    tagId: number | null
    rank: number | null
    animeId: number | null
  }

  export type TagsByAnimeCountAggregateOutputType = {
    id: number
    tagId: number
    rank: number
    animeId: number
    _all: number
  }


  export type TagsByAnimeAvgAggregateInputType = {
    id?: true
    tagId?: true
    rank?: true
    animeId?: true
  }

  export type TagsByAnimeSumAggregateInputType = {
    id?: true
    tagId?: true
    rank?: true
    animeId?: true
  }

  export type TagsByAnimeMinAggregateInputType = {
    id?: true
    tagId?: true
    rank?: true
    animeId?: true
  }

  export type TagsByAnimeMaxAggregateInputType = {
    id?: true
    tagId?: true
    rank?: true
    animeId?: true
  }

  export type TagsByAnimeCountAggregateInputType = {
    id?: true
    tagId?: true
    rank?: true
    animeId?: true
    _all?: true
  }

  export type TagsByAnimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsByAnime to aggregate.
     */
    where?: TagsByAnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsByAnimes to fetch.
     */
    orderBy?: TagsByAnimeOrderByWithRelationAndSearchRelevanceInput | TagsByAnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsByAnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsByAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsByAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TagsByAnimes
    **/
    _count?: true | TagsByAnimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsByAnimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsByAnimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsByAnimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsByAnimeMaxAggregateInputType
  }

  export type GetTagsByAnimeAggregateType<T extends TagsByAnimeAggregateArgs> = {
        [P in keyof T & keyof AggregateTagsByAnime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagsByAnime[P]>
      : GetScalarType<T[P], AggregateTagsByAnime[P]>
  }




  export type TagsByAnimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsByAnimeWhereInput
    orderBy?: TagsByAnimeOrderByWithAggregationInput | TagsByAnimeOrderByWithAggregationInput[]
    by: TagsByAnimeScalarFieldEnum[] | TagsByAnimeScalarFieldEnum
    having?: TagsByAnimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsByAnimeCountAggregateInputType | true
    _avg?: TagsByAnimeAvgAggregateInputType
    _sum?: TagsByAnimeSumAggregateInputType
    _min?: TagsByAnimeMinAggregateInputType
    _max?: TagsByAnimeMaxAggregateInputType
  }

  export type TagsByAnimeGroupByOutputType = {
    id: number
    tagId: number
    rank: number
    animeId: number | null
    _count: TagsByAnimeCountAggregateOutputType | null
    _avg: TagsByAnimeAvgAggregateOutputType | null
    _sum: TagsByAnimeSumAggregateOutputType | null
    _min: TagsByAnimeMinAggregateOutputType | null
    _max: TagsByAnimeMaxAggregateOutputType | null
  }

  type GetTagsByAnimeGroupByPayload<T extends TagsByAnimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsByAnimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsByAnimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsByAnimeGroupByOutputType[P]>
            : GetScalarType<T[P], TagsByAnimeGroupByOutputType[P]>
        }
      >
    >


  export type TagsByAnimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tagId?: boolean
    rank?: boolean
    animeId?: boolean
    anime?: boolean | TagsByAnime$animeArgs<ExtArgs>
    Tags?: boolean | TagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tagsByAnime"]>

  export type TagsByAnimeSelectScalar = {
    id?: boolean
    tagId?: boolean
    rank?: boolean
    animeId?: boolean
  }


  export type TagsByAnimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | TagsByAnime$animeArgs<ExtArgs>
    Tags?: boolean | TagsDefaultArgs<ExtArgs>
  }


  export type $TagsByAnimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TagsByAnime"
    objects: {
      anime: Prisma.$AnimePayload<ExtArgs> | null
      Tags: Prisma.$TagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tagId: number
      rank: number
      animeId: number | null
    }, ExtArgs["result"]["tagsByAnime"]>
    composites: {}
  }


  type TagsByAnimeGetPayload<S extends boolean | null | undefined | TagsByAnimeDefaultArgs> = $Result.GetResult<Prisma.$TagsByAnimePayload, S>

  type TagsByAnimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagsByAnimeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagsByAnimeCountAggregateInputType | true
    }

  export interface TagsByAnimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TagsByAnime'], meta: { name: 'TagsByAnime' } }
    /**
     * Find zero or one TagsByAnime that matches the filter.
     * @param {TagsByAnimeFindUniqueArgs} args - Arguments to find a TagsByAnime
     * @example
     * // Get one TagsByAnime
     * const tagsByAnime = await prisma.tagsByAnime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagsByAnimeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TagsByAnimeFindUniqueArgs<ExtArgs>>
    ): Prisma__TagsByAnimeClient<$Result.GetResult<Prisma.$TagsByAnimePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TagsByAnime that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TagsByAnimeFindUniqueOrThrowArgs} args - Arguments to find a TagsByAnime
     * @example
     * // Get one TagsByAnime
     * const tagsByAnime = await prisma.tagsByAnime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagsByAnimeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsByAnimeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagsByAnimeClient<$Result.GetResult<Prisma.$TagsByAnimePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TagsByAnime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsByAnimeFindFirstArgs} args - Arguments to find a TagsByAnime
     * @example
     * // Get one TagsByAnime
     * const tagsByAnime = await prisma.tagsByAnime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagsByAnimeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsByAnimeFindFirstArgs<ExtArgs>>
    ): Prisma__TagsByAnimeClient<$Result.GetResult<Prisma.$TagsByAnimePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TagsByAnime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsByAnimeFindFirstOrThrowArgs} args - Arguments to find a TagsByAnime
     * @example
     * // Get one TagsByAnime
     * const tagsByAnime = await prisma.tagsByAnime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagsByAnimeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsByAnimeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagsByAnimeClient<$Result.GetResult<Prisma.$TagsByAnimePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TagsByAnimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsByAnimeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagsByAnimes
     * const tagsByAnimes = await prisma.tagsByAnime.findMany()
     * 
     * // Get first 10 TagsByAnimes
     * const tagsByAnimes = await prisma.tagsByAnime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsByAnimeWithIdOnly = await prisma.tagsByAnime.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagsByAnimeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsByAnimeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsByAnimePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TagsByAnime.
     * @param {TagsByAnimeCreateArgs} args - Arguments to create a TagsByAnime.
     * @example
     * // Create one TagsByAnime
     * const TagsByAnime = await prisma.tagsByAnime.create({
     *   data: {
     *     // ... data to create a TagsByAnime
     *   }
     * })
     * 
    **/
    create<T extends TagsByAnimeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsByAnimeCreateArgs<ExtArgs>>
    ): Prisma__TagsByAnimeClient<$Result.GetResult<Prisma.$TagsByAnimePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TagsByAnimes.
     *     @param {TagsByAnimeCreateManyArgs} args - Arguments to create many TagsByAnimes.
     *     @example
     *     // Create many TagsByAnimes
     *     const tagsByAnime = await prisma.tagsByAnime.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagsByAnimeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsByAnimeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TagsByAnime.
     * @param {TagsByAnimeDeleteArgs} args - Arguments to delete one TagsByAnime.
     * @example
     * // Delete one TagsByAnime
     * const TagsByAnime = await prisma.tagsByAnime.delete({
     *   where: {
     *     // ... filter to delete one TagsByAnime
     *   }
     * })
     * 
    **/
    delete<T extends TagsByAnimeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TagsByAnimeDeleteArgs<ExtArgs>>
    ): Prisma__TagsByAnimeClient<$Result.GetResult<Prisma.$TagsByAnimePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TagsByAnime.
     * @param {TagsByAnimeUpdateArgs} args - Arguments to update one TagsByAnime.
     * @example
     * // Update one TagsByAnime
     * const tagsByAnime = await prisma.tagsByAnime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagsByAnimeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsByAnimeUpdateArgs<ExtArgs>>
    ): Prisma__TagsByAnimeClient<$Result.GetResult<Prisma.$TagsByAnimePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TagsByAnimes.
     * @param {TagsByAnimeDeleteManyArgs} args - Arguments to filter TagsByAnimes to delete.
     * @example
     * // Delete a few TagsByAnimes
     * const { count } = await prisma.tagsByAnime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagsByAnimeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsByAnimeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagsByAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsByAnimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagsByAnimes
     * const tagsByAnime = await prisma.tagsByAnime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagsByAnimeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TagsByAnimeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TagsByAnime.
     * @param {TagsByAnimeUpsertArgs} args - Arguments to update or create a TagsByAnime.
     * @example
     * // Update or create a TagsByAnime
     * const tagsByAnime = await prisma.tagsByAnime.upsert({
     *   create: {
     *     // ... data to create a TagsByAnime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagsByAnime we want to update
     *   }
     * })
    **/
    upsert<T extends TagsByAnimeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TagsByAnimeUpsertArgs<ExtArgs>>
    ): Prisma__TagsByAnimeClient<$Result.GetResult<Prisma.$TagsByAnimePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TagsByAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsByAnimeCountArgs} args - Arguments to filter TagsByAnimes to count.
     * @example
     * // Count the number of TagsByAnimes
     * const count = await prisma.tagsByAnime.count({
     *   where: {
     *     // ... the filter for the TagsByAnimes we want to count
     *   }
     * })
    **/
    count<T extends TagsByAnimeCountArgs>(
      args?: Subset<T, TagsByAnimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsByAnimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TagsByAnime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsByAnimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsByAnimeAggregateArgs>(args: Subset<T, TagsByAnimeAggregateArgs>): Prisma.PrismaPromise<GetTagsByAnimeAggregateType<T>>

    /**
     * Group by TagsByAnime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsByAnimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagsByAnimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsByAnimeGroupByArgs['orderBy'] }
        : { orderBy?: TagsByAnimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagsByAnimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsByAnimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TagsByAnime model
   */
  readonly fields: TagsByAnimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagsByAnime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsByAnimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    anime<T extends TagsByAnime$animeArgs<ExtArgs> = {}>(args?: Subset<T, TagsByAnime$animeArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Tags<T extends TagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagsDefaultArgs<ExtArgs>>): Prisma__TagsClient<$Result.GetResult<Prisma.$TagsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TagsByAnime model
   */ 
  interface TagsByAnimeFieldRefs {
    readonly id: FieldRef<"TagsByAnime", 'Int'>
    readonly tagId: FieldRef<"TagsByAnime", 'Int'>
    readonly rank: FieldRef<"TagsByAnime", 'Int'>
    readonly animeId: FieldRef<"TagsByAnime", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TagsByAnime findUnique
   */
  export type TagsByAnimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
    /**
     * Filter, which TagsByAnime to fetch.
     */
    where: TagsByAnimeWhereUniqueInput
  }

  /**
   * TagsByAnime findUniqueOrThrow
   */
  export type TagsByAnimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
    /**
     * Filter, which TagsByAnime to fetch.
     */
    where: TagsByAnimeWhereUniqueInput
  }

  /**
   * TagsByAnime findFirst
   */
  export type TagsByAnimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
    /**
     * Filter, which TagsByAnime to fetch.
     */
    where?: TagsByAnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsByAnimes to fetch.
     */
    orderBy?: TagsByAnimeOrderByWithRelationAndSearchRelevanceInput | TagsByAnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsByAnimes.
     */
    cursor?: TagsByAnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsByAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsByAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsByAnimes.
     */
    distinct?: TagsByAnimeScalarFieldEnum | TagsByAnimeScalarFieldEnum[]
  }

  /**
   * TagsByAnime findFirstOrThrow
   */
  export type TagsByAnimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
    /**
     * Filter, which TagsByAnime to fetch.
     */
    where?: TagsByAnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsByAnimes to fetch.
     */
    orderBy?: TagsByAnimeOrderByWithRelationAndSearchRelevanceInput | TagsByAnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsByAnimes.
     */
    cursor?: TagsByAnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsByAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsByAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsByAnimes.
     */
    distinct?: TagsByAnimeScalarFieldEnum | TagsByAnimeScalarFieldEnum[]
  }

  /**
   * TagsByAnime findMany
   */
  export type TagsByAnimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
    /**
     * Filter, which TagsByAnimes to fetch.
     */
    where?: TagsByAnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsByAnimes to fetch.
     */
    orderBy?: TagsByAnimeOrderByWithRelationAndSearchRelevanceInput | TagsByAnimeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TagsByAnimes.
     */
    cursor?: TagsByAnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsByAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsByAnimes.
     */
    skip?: number
    distinct?: TagsByAnimeScalarFieldEnum | TagsByAnimeScalarFieldEnum[]
  }

  /**
   * TagsByAnime create
   */
  export type TagsByAnimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
    /**
     * The data needed to create a TagsByAnime.
     */
    data: XOR<TagsByAnimeCreateInput, TagsByAnimeUncheckedCreateInput>
  }

  /**
   * TagsByAnime createMany
   */
  export type TagsByAnimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TagsByAnimes.
     */
    data: TagsByAnimeCreateManyInput | TagsByAnimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TagsByAnime update
   */
  export type TagsByAnimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
    /**
     * The data needed to update a TagsByAnime.
     */
    data: XOR<TagsByAnimeUpdateInput, TagsByAnimeUncheckedUpdateInput>
    /**
     * Choose, which TagsByAnime to update.
     */
    where: TagsByAnimeWhereUniqueInput
  }

  /**
   * TagsByAnime updateMany
   */
  export type TagsByAnimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TagsByAnimes.
     */
    data: XOR<TagsByAnimeUpdateManyMutationInput, TagsByAnimeUncheckedUpdateManyInput>
    /**
     * Filter which TagsByAnimes to update
     */
    where?: TagsByAnimeWhereInput
  }

  /**
   * TagsByAnime upsert
   */
  export type TagsByAnimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
    /**
     * The filter to search for the TagsByAnime to update in case it exists.
     */
    where: TagsByAnimeWhereUniqueInput
    /**
     * In case the TagsByAnime found by the `where` argument doesn't exist, create a new TagsByAnime with this data.
     */
    create: XOR<TagsByAnimeCreateInput, TagsByAnimeUncheckedCreateInput>
    /**
     * In case the TagsByAnime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsByAnimeUpdateInput, TagsByAnimeUncheckedUpdateInput>
  }

  /**
   * TagsByAnime delete
   */
  export type TagsByAnimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
    /**
     * Filter which TagsByAnime to delete.
     */
    where: TagsByAnimeWhereUniqueInput
  }

  /**
   * TagsByAnime deleteMany
   */
  export type TagsByAnimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsByAnimes to delete
     */
    where?: TagsByAnimeWhereInput
  }

  /**
   * TagsByAnime.anime
   */
  export type TagsByAnime$animeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    where?: AnimeWhereInput
  }

  /**
   * TagsByAnime without action
   */
  export type TagsByAnimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsByAnime
     */
    select?: TagsByAnimeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagsByAnimeInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    suscribtion_type: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    suscribtion_type: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    discord_id: string | null
    firebase_id: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    suscribtion_type: number | null
    suscribtion_end: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    discord_id: string | null
    firebase_id: string | null
    avatar_url: string | null
    created_at: Date | null
    updated_at: Date | null
    suscribtion_type: number | null
    suscribtion_end: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    discord_id: number
    firebase_id: number
    avatar_url: number
    created_at: number
    updated_at: number
    suscribtion_type: number
    suscribtion_end: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    suscribtion_type?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    suscribtion_type?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    discord_id?: true
    firebase_id?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    suscribtion_type?: true
    suscribtion_end?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    discord_id?: true
    firebase_id?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    suscribtion_type?: true
    suscribtion_end?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    discord_id?: true
    firebase_id?: true
    avatar_url?: true
    created_at?: true
    updated_at?: true
    suscribtion_type?: true
    suscribtion_end?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string | null
    username: string
    discord_id: string | null
    firebase_id: string | null
    avatar_url: string | null
    created_at: Date
    updated_at: Date
    suscribtion_type: number | null
    suscribtion_end: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    discord_id?: boolean
    firebase_id?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    suscribtion_type?: boolean
    suscribtion_end?: boolean
    AnimeHistory?: boolean | User$AnimeHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    discord_id?: boolean
    firebase_id?: boolean
    avatar_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    suscribtion_type?: boolean
    suscribtion_end?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AnimeHistory?: boolean | User$AnimeHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      AnimeHistory: Prisma.$AnimeHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string | null
      username: string
      discord_id: string | null
      firebase_id: string | null
      avatar_url: string | null
      created_at: Date
      updated_at: Date
      suscribtion_type: number | null
      suscribtion_end: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    AnimeHistory<T extends User$AnimeHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$AnimeHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly discord_id: FieldRef<"User", 'String'>
    readonly firebase_id: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly suscribtion_type: FieldRef<"User", 'Int'>
    readonly suscribtion_end: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.AnimeHistory
   */
  export type User$AnimeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeHistory
     */
    select?: AnimeHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeHistoryInclude<ExtArgs> | null
    where?: AnimeHistoryWhereInput
    orderBy?: AnimeHistoryOrderByWithRelationAndSearchRelevanceInput | AnimeHistoryOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: AnimeHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeHistoryScalarFieldEnum | AnimeHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnimeScalarFieldEnum: {
    anilist_id: 'anilist_id',
    status: 'status',
    popularity: 'popularity',
    genres: 'genres',
    bannerImage: 'bannerImage',
    coverImage: 'coverImage',
    description: 'description',
    duration: 'duration',
    endDate: 'endDate',
    episodes: 'episodes',
    description_fr: 'description_fr',
    format: 'format',
    idMal: 'idMal',
    isAdult: 'isAdult',
    startDate: 'startDate',
    synonyms: 'synonyms',
    trailer: 'trailer',
    trending: 'trending',
    url_anime_sama: 'url_anime_sama',
    url_fr_anime: 'url_fr_anime',
    url_neko: 'url_neko',
    relations: 'relations',
    Id: 'Id',
    title: 'title',
    titleenglish: 'titleenglish',
    titleromanji: 'titleromanji'
  };

  export type AnimeScalarFieldEnum = (typeof AnimeScalarFieldEnum)[keyof typeof AnimeScalarFieldEnum]


  export const AnimeHistoryScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    duration: 'duration',
    episode_id: 'episode_id',
    user_id: 'user_id'
  };

  export type AnimeHistoryScalarFieldEnum = (typeof AnimeHistoryScalarFieldEnum)[keyof typeof AnimeHistoryScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    time: 'time',
    episode: 'episode',
    num: 'num',
    url: 'url',
    url_image: 'url_image',
    anime_id: 'anime_id'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const LatestScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    episode: 'episode',
    lang: 'lang',
    anime_url: 'anime_url',
    anime_id: 'anime_id'
  };

  export type LatestScalarFieldEnum = (typeof LatestScalarFieldEnum)[keyof typeof LatestScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const TagsByAnimeScalarFieldEnum: {
    id: 'id',
    tagId: 'tagId',
    rank: 'rank',
    animeId: 'animeId'
  };

  export type TagsByAnimeScalarFieldEnum = (typeof TagsByAnimeScalarFieldEnum)[keyof typeof TagsByAnimeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    discord_id: 'discord_id',
    firebase_id: 'firebase_id',
    avatar_url: 'avatar_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    suscribtion_type: 'suscribtion_type',
    suscribtion_end: 'suscribtion_end'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AnimeOrderByRelevanceFieldEnum: {
    status: 'status',
    genres: 'genres',
    bannerImage: 'bannerImage',
    coverImage: 'coverImage',
    description: 'description',
    description_fr: 'description_fr',
    format: 'format',
    synonyms: 'synonyms',
    trailer: 'trailer',
    url_anime_sama: 'url_anime_sama',
    url_fr_anime: 'url_fr_anime',
    url_neko: 'url_neko',
    title: 'title',
    titleenglish: 'titleenglish',
    titleromanji: 'titleromanji'
  };

  export type AnimeOrderByRelevanceFieldEnum = (typeof AnimeOrderByRelevanceFieldEnum)[keyof typeof AnimeOrderByRelevanceFieldEnum]


  export const EpisodeOrderByRelevanceFieldEnum: {
    time: 'time',
    episode: 'episode',
    url: 'url',
    url_image: 'url_image'
  };

  export type EpisodeOrderByRelevanceFieldEnum = (typeof EpisodeOrderByRelevanceFieldEnum)[keyof typeof EpisodeOrderByRelevanceFieldEnum]


  export const LatestOrderByRelevanceFieldEnum: {
    timestamp: 'timestamp',
    episode: 'episode',
    lang: 'lang',
    anime_url: 'anime_url'
  };

  export type LatestOrderByRelevanceFieldEnum = (typeof LatestOrderByRelevanceFieldEnum)[keyof typeof LatestOrderByRelevanceFieldEnum]


  export const TagsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type TagsOrderByRelevanceFieldEnum = (typeof TagsOrderByRelevanceFieldEnum)[keyof typeof TagsOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    username: 'username',
    discord_id: 'discord_id',
    firebase_id: 'firebase_id',
    avatar_url: 'avatar_url'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AnimeWhereInput = {
    AND?: AnimeWhereInput | AnimeWhereInput[]
    OR?: AnimeWhereInput[]
    NOT?: AnimeWhereInput | AnimeWhereInput[]
    anilist_id?: IntNullableFilter<"Anime"> | number | null
    status?: StringFilter<"Anime"> | string
    popularity?: IntFilter<"Anime"> | number
    genres?: StringNullableListFilter<"Anime">
    bannerImage?: StringNullableFilter<"Anime"> | string | null
    coverImage?: StringFilter<"Anime"> | string
    description?: StringNullableFilter<"Anime"> | string | null
    duration?: IntNullableFilter<"Anime"> | number | null
    endDate?: DateTimeNullableFilter<"Anime"> | Date | string | null
    episodes?: IntNullableFilter<"Anime"> | number | null
    description_fr?: StringNullableFilter<"Anime"> | string | null
    format?: StringFilter<"Anime"> | string
    idMal?: IntNullableFilter<"Anime"> | number | null
    isAdult?: BoolNullableFilter<"Anime"> | boolean | null
    startDate?: DateTimeFilter<"Anime"> | Date | string
    synonyms?: StringNullableListFilter<"Anime">
    trailer?: StringFilter<"Anime"> | string
    trending?: IntFilter<"Anime"> | number
    url_anime_sama?: StringNullableFilter<"Anime"> | string | null
    url_fr_anime?: StringNullableFilter<"Anime"> | string | null
    url_neko?: StringNullableFilter<"Anime"> | string | null
    relations?: IntNullableListFilter<"Anime">
    Id?: IntFilter<"Anime"> | number
    title?: StringNullableFilter<"Anime"> | string | null
    titleenglish?: StringNullableFilter<"Anime"> | string | null
    titleromanji?: StringNullableFilter<"Anime"> | string | null
    Episode?: EpisodeListRelationFilter
    Latest?: LatestListRelationFilter
    Tags?: TagsByAnimeListRelationFilter
  }

  export type AnimeOrderByWithRelationAndSearchRelevanceInput = {
    anilist_id?: SortOrderInput | SortOrder
    status?: SortOrder
    popularity?: SortOrder
    genres?: SortOrder
    bannerImage?: SortOrderInput | SortOrder
    coverImage?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    episodes?: SortOrderInput | SortOrder
    description_fr?: SortOrderInput | SortOrder
    format?: SortOrder
    idMal?: SortOrderInput | SortOrder
    isAdult?: SortOrderInput | SortOrder
    startDate?: SortOrder
    synonyms?: SortOrder
    trailer?: SortOrder
    trending?: SortOrder
    url_anime_sama?: SortOrderInput | SortOrder
    url_fr_anime?: SortOrderInput | SortOrder
    url_neko?: SortOrderInput | SortOrder
    relations?: SortOrder
    Id?: SortOrder
    title?: SortOrderInput | SortOrder
    titleenglish?: SortOrderInput | SortOrder
    titleromanji?: SortOrderInput | SortOrder
    Episode?: EpisodeOrderByRelationAggregateInput
    Latest?: LatestOrderByRelationAggregateInput
    Tags?: TagsByAnimeOrderByRelationAggregateInput
    _relevance?: AnimeOrderByRelevanceInput
  }

  export type AnimeWhereUniqueInput = Prisma.AtLeast<{
    anilist_id?: number
    idMal?: number
    url_anime_sama?: string
    url_fr_anime?: string
    url_neko?: string
    Id?: number
    AND?: AnimeWhereInput | AnimeWhereInput[]
    OR?: AnimeWhereInput[]
    NOT?: AnimeWhereInput | AnimeWhereInput[]
    status?: StringFilter<"Anime"> | string
    popularity?: IntFilter<"Anime"> | number
    genres?: StringNullableListFilter<"Anime">
    bannerImage?: StringNullableFilter<"Anime"> | string | null
    coverImage?: StringFilter<"Anime"> | string
    description?: StringNullableFilter<"Anime"> | string | null
    duration?: IntNullableFilter<"Anime"> | number | null
    endDate?: DateTimeNullableFilter<"Anime"> | Date | string | null
    episodes?: IntNullableFilter<"Anime"> | number | null
    description_fr?: StringNullableFilter<"Anime"> | string | null
    format?: StringFilter<"Anime"> | string
    isAdult?: BoolNullableFilter<"Anime"> | boolean | null
    startDate?: DateTimeFilter<"Anime"> | Date | string
    synonyms?: StringNullableListFilter<"Anime">
    trailer?: StringFilter<"Anime"> | string
    trending?: IntFilter<"Anime"> | number
    relations?: IntNullableListFilter<"Anime">
    title?: StringNullableFilter<"Anime"> | string | null
    titleenglish?: StringNullableFilter<"Anime"> | string | null
    titleromanji?: StringNullableFilter<"Anime"> | string | null
    Episode?: EpisodeListRelationFilter
    Latest?: LatestListRelationFilter
    Tags?: TagsByAnimeListRelationFilter
  }, "Id" | "anilist_id" | "idMal" | "url_anime_sama" | "url_fr_anime" | "url_neko">

  export type AnimeOrderByWithAggregationInput = {
    anilist_id?: SortOrderInput | SortOrder
    status?: SortOrder
    popularity?: SortOrder
    genres?: SortOrder
    bannerImage?: SortOrderInput | SortOrder
    coverImage?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    episodes?: SortOrderInput | SortOrder
    description_fr?: SortOrderInput | SortOrder
    format?: SortOrder
    idMal?: SortOrderInput | SortOrder
    isAdult?: SortOrderInput | SortOrder
    startDate?: SortOrder
    synonyms?: SortOrder
    trailer?: SortOrder
    trending?: SortOrder
    url_anime_sama?: SortOrderInput | SortOrder
    url_fr_anime?: SortOrderInput | SortOrder
    url_neko?: SortOrderInput | SortOrder
    relations?: SortOrder
    Id?: SortOrder
    title?: SortOrderInput | SortOrder
    titleenglish?: SortOrderInput | SortOrder
    titleromanji?: SortOrderInput | SortOrder
    _count?: AnimeCountOrderByAggregateInput
    _avg?: AnimeAvgOrderByAggregateInput
    _max?: AnimeMaxOrderByAggregateInput
    _min?: AnimeMinOrderByAggregateInput
    _sum?: AnimeSumOrderByAggregateInput
  }

  export type AnimeScalarWhereWithAggregatesInput = {
    AND?: AnimeScalarWhereWithAggregatesInput | AnimeScalarWhereWithAggregatesInput[]
    OR?: AnimeScalarWhereWithAggregatesInput[]
    NOT?: AnimeScalarWhereWithAggregatesInput | AnimeScalarWhereWithAggregatesInput[]
    anilist_id?: IntNullableWithAggregatesFilter<"Anime"> | number | null
    status?: StringWithAggregatesFilter<"Anime"> | string
    popularity?: IntWithAggregatesFilter<"Anime"> | number
    genres?: StringNullableListFilter<"Anime">
    bannerImage?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    coverImage?: StringWithAggregatesFilter<"Anime"> | string
    description?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    duration?: IntNullableWithAggregatesFilter<"Anime"> | number | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Anime"> | Date | string | null
    episodes?: IntNullableWithAggregatesFilter<"Anime"> | number | null
    description_fr?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    format?: StringWithAggregatesFilter<"Anime"> | string
    idMal?: IntNullableWithAggregatesFilter<"Anime"> | number | null
    isAdult?: BoolNullableWithAggregatesFilter<"Anime"> | boolean | null
    startDate?: DateTimeWithAggregatesFilter<"Anime"> | Date | string
    synonyms?: StringNullableListFilter<"Anime">
    trailer?: StringWithAggregatesFilter<"Anime"> | string
    trending?: IntWithAggregatesFilter<"Anime"> | number
    url_anime_sama?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    url_fr_anime?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    url_neko?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    relations?: IntNullableListFilter<"Anime">
    Id?: IntWithAggregatesFilter<"Anime"> | number
    title?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    titleenglish?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    titleromanji?: StringNullableWithAggregatesFilter<"Anime"> | string | null
  }

  export type AnimeHistoryWhereInput = {
    AND?: AnimeHistoryWhereInput | AnimeHistoryWhereInput[]
    OR?: AnimeHistoryWhereInput[]
    NOT?: AnimeHistoryWhereInput | AnimeHistoryWhereInput[]
    id?: IntFilter<"AnimeHistory"> | number
    timestamp?: IntFilter<"AnimeHistory"> | number
    duration?: IntFilter<"AnimeHistory"> | number
    episode_id?: IntFilter<"AnimeHistory"> | number
    user_id?: IntFilter<"AnimeHistory"> | number
    Episode?: XOR<EpisodeRelationFilter, EpisodeWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AnimeHistoryOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
    Episode?: EpisodeOrderByWithRelationAndSearchRelevanceInput
    User?: UserOrderByWithRelationAndSearchRelevanceInput
  }

  export type AnimeHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnimeHistoryWhereInput | AnimeHistoryWhereInput[]
    OR?: AnimeHistoryWhereInput[]
    NOT?: AnimeHistoryWhereInput | AnimeHistoryWhereInput[]
    timestamp?: IntFilter<"AnimeHistory"> | number
    duration?: IntFilter<"AnimeHistory"> | number
    episode_id?: IntFilter<"AnimeHistory"> | number
    user_id?: IntFilter<"AnimeHistory"> | number
    Episode?: XOR<EpisodeRelationFilter, EpisodeWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AnimeHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
    _count?: AnimeHistoryCountOrderByAggregateInput
    _avg?: AnimeHistoryAvgOrderByAggregateInput
    _max?: AnimeHistoryMaxOrderByAggregateInput
    _min?: AnimeHistoryMinOrderByAggregateInput
    _sum?: AnimeHistorySumOrderByAggregateInput
  }

  export type AnimeHistoryScalarWhereWithAggregatesInput = {
    AND?: AnimeHistoryScalarWhereWithAggregatesInput | AnimeHistoryScalarWhereWithAggregatesInput[]
    OR?: AnimeHistoryScalarWhereWithAggregatesInput[]
    NOT?: AnimeHistoryScalarWhereWithAggregatesInput | AnimeHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AnimeHistory"> | number
    timestamp?: IntWithAggregatesFilter<"AnimeHistory"> | number
    duration?: IntWithAggregatesFilter<"AnimeHistory"> | number
    episode_id?: IntWithAggregatesFilter<"AnimeHistory"> | number
    user_id?: IntWithAggregatesFilter<"AnimeHistory"> | number
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: IntFilter<"Episode"> | number
    time?: StringFilter<"Episode"> | string
    episode?: StringFilter<"Episode"> | string
    num?: IntFilter<"Episode"> | number
    url?: StringFilter<"Episode"> | string
    url_image?: StringFilter<"Episode"> | string
    anime_id?: IntFilter<"Episode"> | number
    AnimeHistory?: AnimeHistoryListRelationFilter
    Anime?: XOR<AnimeRelationFilter, AnimeWhereInput>
  }

  export type EpisodeOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    time?: SortOrder
    episode?: SortOrder
    num?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    anime_id?: SortOrder
    AnimeHistory?: AnimeHistoryOrderByRelationAggregateInput
    Anime?: AnimeOrderByWithRelationAndSearchRelevanceInput
    _relevance?: EpisodeOrderByRelevanceInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    time?: StringFilter<"Episode"> | string
    episode?: StringFilter<"Episode"> | string
    num?: IntFilter<"Episode"> | number
    url_image?: StringFilter<"Episode"> | string
    anime_id?: IntFilter<"Episode"> | number
    AnimeHistory?: AnimeHistoryListRelationFilter
    Anime?: XOR<AnimeRelationFilter, AnimeWhereInput>
  }, "id" | "url">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    episode?: SortOrder
    num?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    anime_id?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Episode"> | number
    time?: StringWithAggregatesFilter<"Episode"> | string
    episode?: StringWithAggregatesFilter<"Episode"> | string
    num?: IntWithAggregatesFilter<"Episode"> | number
    url?: StringWithAggregatesFilter<"Episode"> | string
    url_image?: StringWithAggregatesFilter<"Episode"> | string
    anime_id?: IntWithAggregatesFilter<"Episode"> | number
  }

  export type LatestWhereInput = {
    AND?: LatestWhereInput | LatestWhereInput[]
    OR?: LatestWhereInput[]
    NOT?: LatestWhereInput | LatestWhereInput[]
    id?: IntFilter<"Latest"> | number
    timestamp?: StringFilter<"Latest"> | string
    episode?: StringFilter<"Latest"> | string
    lang?: StringFilter<"Latest"> | string
    anime_url?: StringFilter<"Latest"> | string
    anime_id?: IntFilter<"Latest"> | number
    Anime?: XOR<AnimeRelationFilter, AnimeWhereInput>
  }

  export type LatestOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    timestamp?: SortOrder
    episode?: SortOrder
    lang?: SortOrder
    anime_url?: SortOrder
    anime_id?: SortOrder
    Anime?: AnimeOrderByWithRelationAndSearchRelevanceInput
    _relevance?: LatestOrderByRelevanceInput
  }

  export type LatestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    anime_url?: string
    AND?: LatestWhereInput | LatestWhereInput[]
    OR?: LatestWhereInput[]
    NOT?: LatestWhereInput | LatestWhereInput[]
    timestamp?: StringFilter<"Latest"> | string
    episode?: StringFilter<"Latest"> | string
    lang?: StringFilter<"Latest"> | string
    anime_id?: IntFilter<"Latest"> | number
    Anime?: XOR<AnimeRelationFilter, AnimeWhereInput>
  }, "id" | "anime_url">

  export type LatestOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    episode?: SortOrder
    lang?: SortOrder
    anime_url?: SortOrder
    anime_id?: SortOrder
    _count?: LatestCountOrderByAggregateInput
    _avg?: LatestAvgOrderByAggregateInput
    _max?: LatestMaxOrderByAggregateInput
    _min?: LatestMinOrderByAggregateInput
    _sum?: LatestSumOrderByAggregateInput
  }

  export type LatestScalarWhereWithAggregatesInput = {
    AND?: LatestScalarWhereWithAggregatesInput | LatestScalarWhereWithAggregatesInput[]
    OR?: LatestScalarWhereWithAggregatesInput[]
    NOT?: LatestScalarWhereWithAggregatesInput | LatestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Latest"> | number
    timestamp?: StringWithAggregatesFilter<"Latest"> | string
    episode?: StringWithAggregatesFilter<"Latest"> | string
    lang?: StringWithAggregatesFilter<"Latest"> | string
    anime_url?: StringWithAggregatesFilter<"Latest"> | string
    anime_id?: IntWithAggregatesFilter<"Latest"> | number
  }

  export type TagsWhereInput = {
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    id?: IntFilter<"Tags"> | number
    name?: StringFilter<"Tags"> | string
    TagsByAnime?: TagsByAnimeListRelationFilter
  }

  export type TagsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    TagsByAnime?: TagsByAnimeOrderByRelationAggregateInput
    _relevance?: TagsOrderByRelevanceInput
  }

  export type TagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    TagsByAnime?: TagsByAnimeListRelationFilter
  }, "id" | "name">

  export type TagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagsCountOrderByAggregateInput
    _avg?: TagsAvgOrderByAggregateInput
    _max?: TagsMaxOrderByAggregateInput
    _min?: TagsMinOrderByAggregateInput
    _sum?: TagsSumOrderByAggregateInput
  }

  export type TagsScalarWhereWithAggregatesInput = {
    AND?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    OR?: TagsScalarWhereWithAggregatesInput[]
    NOT?: TagsScalarWhereWithAggregatesInput | TagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tags"> | number
    name?: StringWithAggregatesFilter<"Tags"> | string
  }

  export type TagsByAnimeWhereInput = {
    AND?: TagsByAnimeWhereInput | TagsByAnimeWhereInput[]
    OR?: TagsByAnimeWhereInput[]
    NOT?: TagsByAnimeWhereInput | TagsByAnimeWhereInput[]
    id?: IntFilter<"TagsByAnime"> | number
    tagId?: IntFilter<"TagsByAnime"> | number
    rank?: IntFilter<"TagsByAnime"> | number
    animeId?: IntNullableFilter<"TagsByAnime"> | number | null
    anime?: XOR<AnimeNullableRelationFilter, AnimeWhereInput> | null
    Tags?: XOR<TagsRelationFilter, TagsWhereInput>
  }

  export type TagsByAnimeOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    tagId?: SortOrder
    rank?: SortOrder
    animeId?: SortOrderInput | SortOrder
    anime?: AnimeOrderByWithRelationAndSearchRelevanceInput
    Tags?: TagsOrderByWithRelationAndSearchRelevanceInput
  }

  export type TagsByAnimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagsByAnimeWhereInput | TagsByAnimeWhereInput[]
    OR?: TagsByAnimeWhereInput[]
    NOT?: TagsByAnimeWhereInput | TagsByAnimeWhereInput[]
    tagId?: IntFilter<"TagsByAnime"> | number
    rank?: IntFilter<"TagsByAnime"> | number
    animeId?: IntNullableFilter<"TagsByAnime"> | number | null
    anime?: XOR<AnimeNullableRelationFilter, AnimeWhereInput> | null
    Tags?: XOR<TagsRelationFilter, TagsWhereInput>
  }, "id">

  export type TagsByAnimeOrderByWithAggregationInput = {
    id?: SortOrder
    tagId?: SortOrder
    rank?: SortOrder
    animeId?: SortOrderInput | SortOrder
    _count?: TagsByAnimeCountOrderByAggregateInput
    _avg?: TagsByAnimeAvgOrderByAggregateInput
    _max?: TagsByAnimeMaxOrderByAggregateInput
    _min?: TagsByAnimeMinOrderByAggregateInput
    _sum?: TagsByAnimeSumOrderByAggregateInput
  }

  export type TagsByAnimeScalarWhereWithAggregatesInput = {
    AND?: TagsByAnimeScalarWhereWithAggregatesInput | TagsByAnimeScalarWhereWithAggregatesInput[]
    OR?: TagsByAnimeScalarWhereWithAggregatesInput[]
    NOT?: TagsByAnimeScalarWhereWithAggregatesInput | TagsByAnimeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TagsByAnime"> | number
    tagId?: IntWithAggregatesFilter<"TagsByAnime"> | number
    rank?: IntWithAggregatesFilter<"TagsByAnime"> | number
    animeId?: IntNullableWithAggregatesFilter<"TagsByAnime"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    discord_id?: StringNullableFilter<"User"> | string | null
    firebase_id?: StringNullableFilter<"User"> | string | null
    avatar_url?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    suscribtion_type?: IntNullableFilter<"User"> | number | null
    suscribtion_end?: DateTimeNullableFilter<"User"> | Date | string | null
    AnimeHistory?: AnimeHistoryListRelationFilter
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    username?: SortOrder
    discord_id?: SortOrderInput | SortOrder
    firebase_id?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    suscribtion_type?: SortOrderInput | SortOrder
    suscribtion_end?: SortOrderInput | SortOrder
    AnimeHistory?: AnimeHistoryOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    discord_id?: string
    firebase_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    avatar_url?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    suscribtion_type?: IntNullableFilter<"User"> | number | null
    suscribtion_end?: DateTimeNullableFilter<"User"> | Date | string | null
    AnimeHistory?: AnimeHistoryListRelationFilter
  }, "id" | "email" | "username" | "discord_id" | "firebase_id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    username?: SortOrder
    discord_id?: SortOrderInput | SortOrder
    firebase_id?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    suscribtion_type?: SortOrderInput | SortOrder
    suscribtion_end?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    discord_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    firebase_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    suscribtion_type?: IntNullableWithAggregatesFilter<"User"> | number | null
    suscribtion_end?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AnimeCreateInput = {
    anilist_id?: number | null
    status: string
    popularity: number
    genres?: AnimeCreategenresInput | string[]
    bannerImage?: string | null
    coverImage: string
    description?: string | null
    duration?: number | null
    endDate?: Date | string | null
    episodes?: number | null
    description_fr?: string | null
    format: string
    idMal?: number | null
    isAdult?: boolean | null
    startDate: Date | string
    synonyms?: AnimeCreatesynonymsInput | string[]
    trailer: string
    trending: number
    url_anime_sama?: string | null
    url_fr_anime?: string | null
    url_neko?: string | null
    relations?: AnimeCreaterelationsInput | number[]
    title?: string | null
    titleenglish?: string | null
    titleromanji?: string | null
    Episode?: EpisodeCreateNestedManyWithoutAnimeInput
    Latest?: LatestCreateNestedManyWithoutAnimeInput
    Tags?: TagsByAnimeCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateInput = {
    anilist_id?: number | null
    status: string
    popularity: number
    genres?: AnimeCreategenresInput | string[]
    bannerImage?: string | null
    coverImage: string
    description?: string | null
    duration?: number | null
    endDate?: Date | string | null
    episodes?: number | null
    description_fr?: string | null
    format: string
    idMal?: number | null
    isAdult?: boolean | null
    startDate: Date | string
    synonyms?: AnimeCreatesynonymsInput | string[]
    trailer: string
    trending: number
    url_anime_sama?: string | null
    url_fr_anime?: string | null
    url_neko?: string | null
    relations?: AnimeCreaterelationsInput | number[]
    Id?: number
    title?: string | null
    titleenglish?: string | null
    titleromanji?: string | null
    Episode?: EpisodeUncheckedCreateNestedManyWithoutAnimeInput
    Latest?: LatestUncheckedCreateNestedManyWithoutAnimeInput
    Tags?: TagsByAnimeUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUpdateInput = {
    anilist_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    genres?: AnimeUpdategenresInput | string[]
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: NullableIntFieldUpdateOperationsInput | number | null
    description_fr?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    idMal?: NullableIntFieldUpdateOperationsInput | number | null
    isAdult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    synonyms?: AnimeUpdatesynonymsInput | string[]
    trailer?: StringFieldUpdateOperationsInput | string
    trending?: IntFieldUpdateOperationsInput | number
    url_anime_sama?: NullableStringFieldUpdateOperationsInput | string | null
    url_fr_anime?: NullableStringFieldUpdateOperationsInput | string | null
    url_neko?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: AnimeUpdaterelationsInput | number[]
    title?: NullableStringFieldUpdateOperationsInput | string | null
    titleenglish?: NullableStringFieldUpdateOperationsInput | string | null
    titleromanji?: NullableStringFieldUpdateOperationsInput | string | null
    Episode?: EpisodeUpdateManyWithoutAnimeNestedInput
    Latest?: LatestUpdateManyWithoutAnimeNestedInput
    Tags?: TagsByAnimeUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateInput = {
    anilist_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    genres?: AnimeUpdategenresInput | string[]
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: NullableIntFieldUpdateOperationsInput | number | null
    description_fr?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    idMal?: NullableIntFieldUpdateOperationsInput | number | null
    isAdult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    synonyms?: AnimeUpdatesynonymsInput | string[]
    trailer?: StringFieldUpdateOperationsInput | string
    trending?: IntFieldUpdateOperationsInput | number
    url_anime_sama?: NullableStringFieldUpdateOperationsInput | string | null
    url_fr_anime?: NullableStringFieldUpdateOperationsInput | string | null
    url_neko?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: AnimeUpdaterelationsInput | number[]
    Id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    titleenglish?: NullableStringFieldUpdateOperationsInput | string | null
    titleromanji?: NullableStringFieldUpdateOperationsInput | string | null
    Episode?: EpisodeUncheckedUpdateManyWithoutAnimeNestedInput
    Latest?: LatestUncheckedUpdateManyWithoutAnimeNestedInput
    Tags?: TagsByAnimeUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeCreateManyInput = {
    anilist_id?: number | null
    status: string
    popularity: number
    genres?: AnimeCreategenresInput | string[]
    bannerImage?: string | null
    coverImage: string
    description?: string | null
    duration?: number | null
    endDate?: Date | string | null
    episodes?: number | null
    description_fr?: string | null
    format: string
    idMal?: number | null
    isAdult?: boolean | null
    startDate: Date | string
    synonyms?: AnimeCreatesynonymsInput | string[]
    trailer: string
    trending: number
    url_anime_sama?: string | null
    url_fr_anime?: string | null
    url_neko?: string | null
    relations?: AnimeCreaterelationsInput | number[]
    Id?: number
    title?: string | null
    titleenglish?: string | null
    titleromanji?: string | null
  }

  export type AnimeUpdateManyMutationInput = {
    anilist_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    genres?: AnimeUpdategenresInput | string[]
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: NullableIntFieldUpdateOperationsInput | number | null
    description_fr?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    idMal?: NullableIntFieldUpdateOperationsInput | number | null
    isAdult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    synonyms?: AnimeUpdatesynonymsInput | string[]
    trailer?: StringFieldUpdateOperationsInput | string
    trending?: IntFieldUpdateOperationsInput | number
    url_anime_sama?: NullableStringFieldUpdateOperationsInput | string | null
    url_fr_anime?: NullableStringFieldUpdateOperationsInput | string | null
    url_neko?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: AnimeUpdaterelationsInput | number[]
    title?: NullableStringFieldUpdateOperationsInput | string | null
    titleenglish?: NullableStringFieldUpdateOperationsInput | string | null
    titleromanji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnimeUncheckedUpdateManyInput = {
    anilist_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    genres?: AnimeUpdategenresInput | string[]
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: NullableIntFieldUpdateOperationsInput | number | null
    description_fr?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    idMal?: NullableIntFieldUpdateOperationsInput | number | null
    isAdult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    synonyms?: AnimeUpdatesynonymsInput | string[]
    trailer?: StringFieldUpdateOperationsInput | string
    trending?: IntFieldUpdateOperationsInput | number
    url_anime_sama?: NullableStringFieldUpdateOperationsInput | string | null
    url_fr_anime?: NullableStringFieldUpdateOperationsInput | string | null
    url_neko?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: AnimeUpdaterelationsInput | number[]
    Id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    titleenglish?: NullableStringFieldUpdateOperationsInput | string | null
    titleromanji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnimeHistoryCreateInput = {
    timestamp: number
    duration: number
    Episode: EpisodeCreateNestedOneWithoutAnimeHistoryInput
    User: UserCreateNestedOneWithoutAnimeHistoryInput
  }

  export type AnimeHistoryUncheckedCreateInput = {
    id?: number
    timestamp: number
    duration: number
    episode_id: number
    user_id: number
  }

  export type AnimeHistoryUpdateInput = {
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    Episode?: EpisodeUpdateOneRequiredWithoutAnimeHistoryNestedInput
    User?: UserUpdateOneRequiredWithoutAnimeHistoryNestedInput
  }

  export type AnimeHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    episode_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnimeHistoryCreateManyInput = {
    id?: number
    timestamp: number
    duration: number
    episode_id: number
    user_id: number
  }

  export type AnimeHistoryUpdateManyMutationInput = {
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AnimeHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    episode_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type EpisodeCreateInput = {
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    AnimeHistory?: AnimeHistoryCreateNestedManyWithoutEpisodeInput
    Anime: AnimeCreateNestedOneWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    anime_id: number
    AnimeHistory?: AnimeHistoryUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUpdateInput = {
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    AnimeHistory?: AnimeHistoryUpdateManyWithoutEpisodeNestedInput
    Anime?: AnimeUpdateOneRequiredWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    anime_id?: IntFieldUpdateOperationsInput | number
    AnimeHistory?: AnimeHistoryUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeCreateManyInput = {
    id?: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    anime_id: number
  }

  export type EpisodeUpdateManyMutationInput = {
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    anime_id?: IntFieldUpdateOperationsInput | number
  }

  export type LatestCreateInput = {
    timestamp: string
    episode: string
    lang: string
    anime_url: string
    Anime: AnimeCreateNestedOneWithoutLatestInput
  }

  export type LatestUncheckedCreateInput = {
    id?: number
    timestamp: string
    episode: string
    lang: string
    anime_url: string
    anime_id: number
  }

  export type LatestUpdateInput = {
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
    Anime?: AnimeUpdateOneRequiredWithoutLatestNestedInput
  }

  export type LatestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
    anime_id?: IntFieldUpdateOperationsInput | number
  }

  export type LatestCreateManyInput = {
    id?: number
    timestamp: string
    episode: string
    lang: string
    anime_url: string
    anime_id: number
  }

  export type LatestUpdateManyMutationInput = {
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
  }

  export type LatestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
    anime_id?: IntFieldUpdateOperationsInput | number
  }

  export type TagsCreateInput = {
    id: number
    name: string
    TagsByAnime?: TagsByAnimeCreateNestedManyWithoutTagsInput
  }

  export type TagsUncheckedCreateInput = {
    id: number
    name: string
    TagsByAnime?: TagsByAnimeUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    TagsByAnime?: TagsByAnimeUpdateManyWithoutTagsNestedInput
  }

  export type TagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    TagsByAnime?: TagsByAnimeUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagsCreateManyInput = {
    id: number
    name: string
  }

  export type TagsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsByAnimeCreateInput = {
    rank: number
    anime?: AnimeCreateNestedOneWithoutTagsInput
    Tags: TagsCreateNestedOneWithoutTagsByAnimeInput
  }

  export type TagsByAnimeUncheckedCreateInput = {
    id?: number
    tagId: number
    rank: number
    animeId?: number | null
  }

  export type TagsByAnimeUpdateInput = {
    rank?: IntFieldUpdateOperationsInput | number
    anime?: AnimeUpdateOneWithoutTagsNestedInput
    Tags?: TagsUpdateOneRequiredWithoutTagsByAnimeNestedInput
  }

  export type TagsByAnimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    animeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagsByAnimeCreateManyInput = {
    id?: number
    tagId: number
    rank: number
    animeId?: number | null
  }

  export type TagsByAnimeUpdateManyMutationInput = {
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type TagsByAnimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    animeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    email: string
    password?: string | null
    username: string
    discord_id?: string | null
    firebase_id?: string | null
    avatar_url?: string | null
    created_at?: Date | string
    updated_at: Date | string
    suscribtion_type?: number | null
    suscribtion_end?: Date | string | null
    AnimeHistory?: AnimeHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password?: string | null
    username: string
    discord_id?: string | null
    firebase_id?: string | null
    avatar_url?: string | null
    created_at?: Date | string
    updated_at: Date | string
    suscribtion_type?: number | null
    suscribtion_end?: Date | string | null
    AnimeHistory?: AnimeHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AnimeHistory?: AnimeHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AnimeHistory?: AnimeHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password?: string | null
    username: string
    discord_id?: string | null
    firebase_id?: string | null
    avatar_url?: string | null
    created_at?: Date | string
    updated_at: Date | string
    suscribtion_type?: number | null
    suscribtion_end?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type LatestListRelationFilter = {
    every?: LatestWhereInput
    some?: LatestWhereInput
    none?: LatestWhereInput
  }

  export type TagsByAnimeListRelationFilter = {
    every?: TagsByAnimeWhereInput
    some?: TagsByAnimeWhereInput
    none?: TagsByAnimeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LatestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagsByAnimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimeOrderByRelevanceInput = {
    fields: AnimeOrderByRelevanceFieldEnum | AnimeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnimeCountOrderByAggregateInput = {
    anilist_id?: SortOrder
    status?: SortOrder
    popularity?: SortOrder
    genres?: SortOrder
    bannerImage?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    endDate?: SortOrder
    episodes?: SortOrder
    description_fr?: SortOrder
    format?: SortOrder
    idMal?: SortOrder
    isAdult?: SortOrder
    startDate?: SortOrder
    synonyms?: SortOrder
    trailer?: SortOrder
    trending?: SortOrder
    url_anime_sama?: SortOrder
    url_fr_anime?: SortOrder
    url_neko?: SortOrder
    relations?: SortOrder
    Id?: SortOrder
    title?: SortOrder
    titleenglish?: SortOrder
    titleromanji?: SortOrder
  }

  export type AnimeAvgOrderByAggregateInput = {
    anilist_id?: SortOrder
    popularity?: SortOrder
    duration?: SortOrder
    episodes?: SortOrder
    idMal?: SortOrder
    trending?: SortOrder
    relations?: SortOrder
    Id?: SortOrder
  }

  export type AnimeMaxOrderByAggregateInput = {
    anilist_id?: SortOrder
    status?: SortOrder
    popularity?: SortOrder
    bannerImage?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    endDate?: SortOrder
    episodes?: SortOrder
    description_fr?: SortOrder
    format?: SortOrder
    idMal?: SortOrder
    isAdult?: SortOrder
    startDate?: SortOrder
    trailer?: SortOrder
    trending?: SortOrder
    url_anime_sama?: SortOrder
    url_fr_anime?: SortOrder
    url_neko?: SortOrder
    Id?: SortOrder
    title?: SortOrder
    titleenglish?: SortOrder
    titleromanji?: SortOrder
  }

  export type AnimeMinOrderByAggregateInput = {
    anilist_id?: SortOrder
    status?: SortOrder
    popularity?: SortOrder
    bannerImage?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    endDate?: SortOrder
    episodes?: SortOrder
    description_fr?: SortOrder
    format?: SortOrder
    idMal?: SortOrder
    isAdult?: SortOrder
    startDate?: SortOrder
    trailer?: SortOrder
    trending?: SortOrder
    url_anime_sama?: SortOrder
    url_fr_anime?: SortOrder
    url_neko?: SortOrder
    Id?: SortOrder
    title?: SortOrder
    titleenglish?: SortOrder
    titleromanji?: SortOrder
  }

  export type AnimeSumOrderByAggregateInput = {
    anilist_id?: SortOrder
    popularity?: SortOrder
    duration?: SortOrder
    episodes?: SortOrder
    idMal?: SortOrder
    trending?: SortOrder
    relations?: SortOrder
    Id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EpisodeRelationFilter = {
    is?: EpisodeWhereInput
    isNot?: EpisodeWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnimeHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnimeHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnimeHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnimeHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnimeHistorySumOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    duration?: SortOrder
    episode_id?: SortOrder
    user_id?: SortOrder
  }

  export type AnimeHistoryListRelationFilter = {
    every?: AnimeHistoryWhereInput
    some?: AnimeHistoryWhereInput
    none?: AnimeHistoryWhereInput
  }

  export type AnimeRelationFilter = {
    is?: AnimeWhereInput
    isNot?: AnimeWhereInput
  }

  export type AnimeHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodeOrderByRelevanceInput = {
    fields: EpisodeOrderByRelevanceFieldEnum | EpisodeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    episode?: SortOrder
    num?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    anime_id?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    id?: SortOrder
    num?: SortOrder
    anime_id?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    episode?: SortOrder
    num?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    anime_id?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    episode?: SortOrder
    num?: SortOrder
    url?: SortOrder
    url_image?: SortOrder
    anime_id?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    id?: SortOrder
    num?: SortOrder
    anime_id?: SortOrder
  }

  export type LatestOrderByRelevanceInput = {
    fields: LatestOrderByRelevanceFieldEnum | LatestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LatestCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    episode?: SortOrder
    lang?: SortOrder
    anime_url?: SortOrder
    anime_id?: SortOrder
  }

  export type LatestAvgOrderByAggregateInput = {
    id?: SortOrder
    anime_id?: SortOrder
  }

  export type LatestMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    episode?: SortOrder
    lang?: SortOrder
    anime_url?: SortOrder
    anime_id?: SortOrder
  }

  export type LatestMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    episode?: SortOrder
    lang?: SortOrder
    anime_url?: SortOrder
    anime_id?: SortOrder
  }

  export type LatestSumOrderByAggregateInput = {
    id?: SortOrder
    anime_id?: SortOrder
  }

  export type TagsOrderByRelevanceInput = {
    fields: TagsOrderByRelevanceFieldEnum | TagsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnimeNullableRelationFilter = {
    is?: AnimeWhereInput | null
    isNot?: AnimeWhereInput | null
  }

  export type TagsRelationFilter = {
    is?: TagsWhereInput
    isNot?: TagsWhereInput
  }

  export type TagsByAnimeCountOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    rank?: SortOrder
    animeId?: SortOrder
  }

  export type TagsByAnimeAvgOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    rank?: SortOrder
    animeId?: SortOrder
  }

  export type TagsByAnimeMaxOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    rank?: SortOrder
    animeId?: SortOrder
  }

  export type TagsByAnimeMinOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    rank?: SortOrder
    animeId?: SortOrder
  }

  export type TagsByAnimeSumOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    rank?: SortOrder
    animeId?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    discord_id?: SortOrder
    firebase_id?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    suscribtion_type?: SortOrder
    suscribtion_end?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    suscribtion_type?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    discord_id?: SortOrder
    firebase_id?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    suscribtion_type?: SortOrder
    suscribtion_end?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    discord_id?: SortOrder
    firebase_id?: SortOrder
    avatar_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    suscribtion_type?: SortOrder
    suscribtion_end?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    suscribtion_type?: SortOrder
  }

  export type AnimeCreategenresInput = {
    set: string[]
  }

  export type AnimeCreatesynonymsInput = {
    set: string[]
  }

  export type AnimeCreaterelationsInput = {
    set: number[]
  }

  export type EpisodeCreateNestedManyWithoutAnimeInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type LatestCreateNestedManyWithoutAnimeInput = {
    create?: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput> | LatestCreateWithoutAnimeInput[] | LatestUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: LatestCreateOrConnectWithoutAnimeInput | LatestCreateOrConnectWithoutAnimeInput[]
    createMany?: LatestCreateManyAnimeInputEnvelope
    connect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
  }

  export type TagsByAnimeCreateNestedManyWithoutAnimeInput = {
    create?: XOR<TagsByAnimeCreateWithoutAnimeInput, TagsByAnimeUncheckedCreateWithoutAnimeInput> | TagsByAnimeCreateWithoutAnimeInput[] | TagsByAnimeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: TagsByAnimeCreateOrConnectWithoutAnimeInput | TagsByAnimeCreateOrConnectWithoutAnimeInput[]
    createMany?: TagsByAnimeCreateManyAnimeInputEnvelope
    connect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
  }

  export type EpisodeUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type LatestUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput> | LatestCreateWithoutAnimeInput[] | LatestUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: LatestCreateOrConnectWithoutAnimeInput | LatestCreateOrConnectWithoutAnimeInput[]
    createMany?: LatestCreateManyAnimeInputEnvelope
    connect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
  }

  export type TagsByAnimeUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<TagsByAnimeCreateWithoutAnimeInput, TagsByAnimeUncheckedCreateWithoutAnimeInput> | TagsByAnimeCreateWithoutAnimeInput[] | TagsByAnimeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: TagsByAnimeCreateOrConnectWithoutAnimeInput | TagsByAnimeCreateOrConnectWithoutAnimeInput[]
    createMany?: TagsByAnimeCreateManyAnimeInputEnvelope
    connect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnimeUpdategenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnimeUpdatesynonymsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AnimeUpdaterelationsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type EpisodeUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutAnimeInput | EpisodeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutAnimeInput | EpisodeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutAnimeInput | EpisodeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type LatestUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput> | LatestCreateWithoutAnimeInput[] | LatestUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: LatestCreateOrConnectWithoutAnimeInput | LatestCreateOrConnectWithoutAnimeInput[]
    upsert?: LatestUpsertWithWhereUniqueWithoutAnimeInput | LatestUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: LatestCreateManyAnimeInputEnvelope
    set?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    disconnect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    delete?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    connect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    update?: LatestUpdateWithWhereUniqueWithoutAnimeInput | LatestUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: LatestUpdateManyWithWhereWithoutAnimeInput | LatestUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: LatestScalarWhereInput | LatestScalarWhereInput[]
  }

  export type TagsByAnimeUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<TagsByAnimeCreateWithoutAnimeInput, TagsByAnimeUncheckedCreateWithoutAnimeInput> | TagsByAnimeCreateWithoutAnimeInput[] | TagsByAnimeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: TagsByAnimeCreateOrConnectWithoutAnimeInput | TagsByAnimeCreateOrConnectWithoutAnimeInput[]
    upsert?: TagsByAnimeUpsertWithWhereUniqueWithoutAnimeInput | TagsByAnimeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: TagsByAnimeCreateManyAnimeInputEnvelope
    set?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    disconnect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    delete?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    connect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    update?: TagsByAnimeUpdateWithWhereUniqueWithoutAnimeInput | TagsByAnimeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: TagsByAnimeUpdateManyWithWhereWithoutAnimeInput | TagsByAnimeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: TagsByAnimeScalarWhereInput | TagsByAnimeScalarWhereInput[]
  }

  export type EpisodeUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutAnimeInput | EpisodeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutAnimeInput | EpisodeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutAnimeInput | EpisodeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type LatestUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput> | LatestCreateWithoutAnimeInput[] | LatestUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: LatestCreateOrConnectWithoutAnimeInput | LatestCreateOrConnectWithoutAnimeInput[]
    upsert?: LatestUpsertWithWhereUniqueWithoutAnimeInput | LatestUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: LatestCreateManyAnimeInputEnvelope
    set?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    disconnect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    delete?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    connect?: LatestWhereUniqueInput | LatestWhereUniqueInput[]
    update?: LatestUpdateWithWhereUniqueWithoutAnimeInput | LatestUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: LatestUpdateManyWithWhereWithoutAnimeInput | LatestUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: LatestScalarWhereInput | LatestScalarWhereInput[]
  }

  export type TagsByAnimeUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<TagsByAnimeCreateWithoutAnimeInput, TagsByAnimeUncheckedCreateWithoutAnimeInput> | TagsByAnimeCreateWithoutAnimeInput[] | TagsByAnimeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: TagsByAnimeCreateOrConnectWithoutAnimeInput | TagsByAnimeCreateOrConnectWithoutAnimeInput[]
    upsert?: TagsByAnimeUpsertWithWhereUniqueWithoutAnimeInput | TagsByAnimeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: TagsByAnimeCreateManyAnimeInputEnvelope
    set?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    disconnect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    delete?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    connect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    update?: TagsByAnimeUpdateWithWhereUniqueWithoutAnimeInput | TagsByAnimeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: TagsByAnimeUpdateManyWithWhereWithoutAnimeInput | TagsByAnimeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: TagsByAnimeScalarWhereInput | TagsByAnimeScalarWhereInput[]
  }

  export type EpisodeCreateNestedOneWithoutAnimeHistoryInput = {
    create?: XOR<EpisodeCreateWithoutAnimeHistoryInput, EpisodeUncheckedCreateWithoutAnimeHistoryInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeHistoryInput
    connect?: EpisodeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnimeHistoryInput = {
    create?: XOR<UserCreateWithoutAnimeHistoryInput, UserUncheckedCreateWithoutAnimeHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimeHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type EpisodeUpdateOneRequiredWithoutAnimeHistoryNestedInput = {
    create?: XOR<EpisodeCreateWithoutAnimeHistoryInput, EpisodeUncheckedCreateWithoutAnimeHistoryInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeHistoryInput
    upsert?: EpisodeUpsertWithoutAnimeHistoryInput
    connect?: EpisodeWhereUniqueInput
    update?: XOR<XOR<EpisodeUpdateToOneWithWhereWithoutAnimeHistoryInput, EpisodeUpdateWithoutAnimeHistoryInput>, EpisodeUncheckedUpdateWithoutAnimeHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutAnimeHistoryNestedInput = {
    create?: XOR<UserCreateWithoutAnimeHistoryInput, UserUncheckedCreateWithoutAnimeHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimeHistoryInput
    upsert?: UserUpsertWithoutAnimeHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnimeHistoryInput, UserUpdateWithoutAnimeHistoryInput>, UserUncheckedUpdateWithoutAnimeHistoryInput>
  }

  export type AnimeHistoryCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput> | AnimeHistoryCreateWithoutEpisodeInput[] | AnimeHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutEpisodeInput | AnimeHistoryCreateOrConnectWithoutEpisodeInput[]
    createMany?: AnimeHistoryCreateManyEpisodeInputEnvelope
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
  }

  export type AnimeCreateNestedOneWithoutEpisodeInput = {
    create?: XOR<AnimeCreateWithoutEpisodeInput, AnimeUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutEpisodeInput
    connect?: AnimeWhereUniqueInput
  }

  export type AnimeHistoryUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput> | AnimeHistoryCreateWithoutEpisodeInput[] | AnimeHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutEpisodeInput | AnimeHistoryCreateOrConnectWithoutEpisodeInput[]
    createMany?: AnimeHistoryCreateManyEpisodeInputEnvelope
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
  }

  export type AnimeHistoryUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput> | AnimeHistoryCreateWithoutEpisodeInput[] | AnimeHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutEpisodeInput | AnimeHistoryCreateOrConnectWithoutEpisodeInput[]
    upsert?: AnimeHistoryUpsertWithWhereUniqueWithoutEpisodeInput | AnimeHistoryUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: AnimeHistoryCreateManyEpisodeInputEnvelope
    set?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    disconnect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    delete?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    update?: AnimeHistoryUpdateWithWhereUniqueWithoutEpisodeInput | AnimeHistoryUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: AnimeHistoryUpdateManyWithWhereWithoutEpisodeInput | AnimeHistoryUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
  }

  export type AnimeUpdateOneRequiredWithoutEpisodeNestedInput = {
    create?: XOR<AnimeCreateWithoutEpisodeInput, AnimeUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutEpisodeInput
    upsert?: AnimeUpsertWithoutEpisodeInput
    connect?: AnimeWhereUniqueInput
    update?: XOR<XOR<AnimeUpdateToOneWithWhereWithoutEpisodeInput, AnimeUpdateWithoutEpisodeInput>, AnimeUncheckedUpdateWithoutEpisodeInput>
  }

  export type AnimeHistoryUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput> | AnimeHistoryCreateWithoutEpisodeInput[] | AnimeHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutEpisodeInput | AnimeHistoryCreateOrConnectWithoutEpisodeInput[]
    upsert?: AnimeHistoryUpsertWithWhereUniqueWithoutEpisodeInput | AnimeHistoryUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: AnimeHistoryCreateManyEpisodeInputEnvelope
    set?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    disconnect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    delete?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    update?: AnimeHistoryUpdateWithWhereUniqueWithoutEpisodeInput | AnimeHistoryUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: AnimeHistoryUpdateManyWithWhereWithoutEpisodeInput | AnimeHistoryUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
  }

  export type AnimeCreateNestedOneWithoutLatestInput = {
    create?: XOR<AnimeCreateWithoutLatestInput, AnimeUncheckedCreateWithoutLatestInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutLatestInput
    connect?: AnimeWhereUniqueInput
  }

  export type AnimeUpdateOneRequiredWithoutLatestNestedInput = {
    create?: XOR<AnimeCreateWithoutLatestInput, AnimeUncheckedCreateWithoutLatestInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutLatestInput
    upsert?: AnimeUpsertWithoutLatestInput
    connect?: AnimeWhereUniqueInput
    update?: XOR<XOR<AnimeUpdateToOneWithWhereWithoutLatestInput, AnimeUpdateWithoutLatestInput>, AnimeUncheckedUpdateWithoutLatestInput>
  }

  export type TagsByAnimeCreateNestedManyWithoutTagsInput = {
    create?: XOR<TagsByAnimeCreateWithoutTagsInput, TagsByAnimeUncheckedCreateWithoutTagsInput> | TagsByAnimeCreateWithoutTagsInput[] | TagsByAnimeUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TagsByAnimeCreateOrConnectWithoutTagsInput | TagsByAnimeCreateOrConnectWithoutTagsInput[]
    createMany?: TagsByAnimeCreateManyTagsInputEnvelope
    connect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
  }

  export type TagsByAnimeUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<TagsByAnimeCreateWithoutTagsInput, TagsByAnimeUncheckedCreateWithoutTagsInput> | TagsByAnimeCreateWithoutTagsInput[] | TagsByAnimeUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TagsByAnimeCreateOrConnectWithoutTagsInput | TagsByAnimeCreateOrConnectWithoutTagsInput[]
    createMany?: TagsByAnimeCreateManyTagsInputEnvelope
    connect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
  }

  export type TagsByAnimeUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TagsByAnimeCreateWithoutTagsInput, TagsByAnimeUncheckedCreateWithoutTagsInput> | TagsByAnimeCreateWithoutTagsInput[] | TagsByAnimeUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TagsByAnimeCreateOrConnectWithoutTagsInput | TagsByAnimeCreateOrConnectWithoutTagsInput[]
    upsert?: TagsByAnimeUpsertWithWhereUniqueWithoutTagsInput | TagsByAnimeUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: TagsByAnimeCreateManyTagsInputEnvelope
    set?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    disconnect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    delete?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    connect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    update?: TagsByAnimeUpdateWithWhereUniqueWithoutTagsInput | TagsByAnimeUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TagsByAnimeUpdateManyWithWhereWithoutTagsInput | TagsByAnimeUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TagsByAnimeScalarWhereInput | TagsByAnimeScalarWhereInput[]
  }

  export type TagsByAnimeUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TagsByAnimeCreateWithoutTagsInput, TagsByAnimeUncheckedCreateWithoutTagsInput> | TagsByAnimeCreateWithoutTagsInput[] | TagsByAnimeUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TagsByAnimeCreateOrConnectWithoutTagsInput | TagsByAnimeCreateOrConnectWithoutTagsInput[]
    upsert?: TagsByAnimeUpsertWithWhereUniqueWithoutTagsInput | TagsByAnimeUpsertWithWhereUniqueWithoutTagsInput[]
    createMany?: TagsByAnimeCreateManyTagsInputEnvelope
    set?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    disconnect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    delete?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    connect?: TagsByAnimeWhereUniqueInput | TagsByAnimeWhereUniqueInput[]
    update?: TagsByAnimeUpdateWithWhereUniqueWithoutTagsInput | TagsByAnimeUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TagsByAnimeUpdateManyWithWhereWithoutTagsInput | TagsByAnimeUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TagsByAnimeScalarWhereInput | TagsByAnimeScalarWhereInput[]
  }

  export type AnimeCreateNestedOneWithoutTagsInput = {
    create?: XOR<AnimeCreateWithoutTagsInput, AnimeUncheckedCreateWithoutTagsInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutTagsInput
    connect?: AnimeWhereUniqueInput
  }

  export type TagsCreateNestedOneWithoutTagsByAnimeInput = {
    create?: XOR<TagsCreateWithoutTagsByAnimeInput, TagsUncheckedCreateWithoutTagsByAnimeInput>
    connectOrCreate?: TagsCreateOrConnectWithoutTagsByAnimeInput
    connect?: TagsWhereUniqueInput
  }

  export type AnimeUpdateOneWithoutTagsNestedInput = {
    create?: XOR<AnimeCreateWithoutTagsInput, AnimeUncheckedCreateWithoutTagsInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutTagsInput
    upsert?: AnimeUpsertWithoutTagsInput
    disconnect?: AnimeWhereInput | boolean
    delete?: AnimeWhereInput | boolean
    connect?: AnimeWhereUniqueInput
    update?: XOR<XOR<AnimeUpdateToOneWithWhereWithoutTagsInput, AnimeUpdateWithoutTagsInput>, AnimeUncheckedUpdateWithoutTagsInput>
  }

  export type TagsUpdateOneRequiredWithoutTagsByAnimeNestedInput = {
    create?: XOR<TagsCreateWithoutTagsByAnimeInput, TagsUncheckedCreateWithoutTagsByAnimeInput>
    connectOrCreate?: TagsCreateOrConnectWithoutTagsByAnimeInput
    upsert?: TagsUpsertWithoutTagsByAnimeInput
    connect?: TagsWhereUniqueInput
    update?: XOR<XOR<TagsUpdateToOneWithWhereWithoutTagsByAnimeInput, TagsUpdateWithoutTagsByAnimeInput>, TagsUncheckedUpdateWithoutTagsByAnimeInput>
  }

  export type AnimeHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput> | AnimeHistoryCreateWithoutUserInput[] | AnimeHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutUserInput | AnimeHistoryCreateOrConnectWithoutUserInput[]
    createMany?: AnimeHistoryCreateManyUserInputEnvelope
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
  }

  export type AnimeHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput> | AnimeHistoryCreateWithoutUserInput[] | AnimeHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutUserInput | AnimeHistoryCreateOrConnectWithoutUserInput[]
    createMany?: AnimeHistoryCreateManyUserInputEnvelope
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
  }

  export type AnimeHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput> | AnimeHistoryCreateWithoutUserInput[] | AnimeHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutUserInput | AnimeHistoryCreateOrConnectWithoutUserInput[]
    upsert?: AnimeHistoryUpsertWithWhereUniqueWithoutUserInput | AnimeHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeHistoryCreateManyUserInputEnvelope
    set?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    disconnect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    delete?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    update?: AnimeHistoryUpdateWithWhereUniqueWithoutUserInput | AnimeHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeHistoryUpdateManyWithWhereWithoutUserInput | AnimeHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
  }

  export type AnimeHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput> | AnimeHistoryCreateWithoutUserInput[] | AnimeHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeHistoryCreateOrConnectWithoutUserInput | AnimeHistoryCreateOrConnectWithoutUserInput[]
    upsert?: AnimeHistoryUpsertWithWhereUniqueWithoutUserInput | AnimeHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeHistoryCreateManyUserInputEnvelope
    set?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    disconnect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    delete?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    connect?: AnimeHistoryWhereUniqueInput | AnimeHistoryWhereUniqueInput[]
    update?: AnimeHistoryUpdateWithWhereUniqueWithoutUserInput | AnimeHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeHistoryUpdateManyWithWhereWithoutUserInput | AnimeHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EpisodeCreateWithoutAnimeInput = {
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    AnimeHistory?: AnimeHistoryCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutAnimeInput = {
    id?: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    AnimeHistory?: AnimeHistoryUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutAnimeInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput>
  }

  export type EpisodeCreateManyAnimeInputEnvelope = {
    data: EpisodeCreateManyAnimeInput | EpisodeCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type LatestCreateWithoutAnimeInput = {
    timestamp: string
    episode: string
    lang: string
    anime_url: string
  }

  export type LatestUncheckedCreateWithoutAnimeInput = {
    id?: number
    timestamp: string
    episode: string
    lang: string
    anime_url: string
  }

  export type LatestCreateOrConnectWithoutAnimeInput = {
    where: LatestWhereUniqueInput
    create: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput>
  }

  export type LatestCreateManyAnimeInputEnvelope = {
    data: LatestCreateManyAnimeInput | LatestCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type TagsByAnimeCreateWithoutAnimeInput = {
    rank: number
    Tags: TagsCreateNestedOneWithoutTagsByAnimeInput
  }

  export type TagsByAnimeUncheckedCreateWithoutAnimeInput = {
    id?: number
    tagId: number
    rank: number
  }

  export type TagsByAnimeCreateOrConnectWithoutAnimeInput = {
    where: TagsByAnimeWhereUniqueInput
    create: XOR<TagsByAnimeCreateWithoutAnimeInput, TagsByAnimeUncheckedCreateWithoutAnimeInput>
  }

  export type TagsByAnimeCreateManyAnimeInputEnvelope = {
    data: TagsByAnimeCreateManyAnimeInput | TagsByAnimeCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type EpisodeUpsertWithWhereUniqueWithoutAnimeInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutAnimeInput, EpisodeUncheckedUpdateWithoutAnimeInput>
    create: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutAnimeInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutAnimeInput, EpisodeUncheckedUpdateWithoutAnimeInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutAnimeInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutAnimeInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: IntFilter<"Episode"> | number
    time?: StringFilter<"Episode"> | string
    episode?: StringFilter<"Episode"> | string
    num?: IntFilter<"Episode"> | number
    url?: StringFilter<"Episode"> | string
    url_image?: StringFilter<"Episode"> | string
    anime_id?: IntFilter<"Episode"> | number
  }

  export type LatestUpsertWithWhereUniqueWithoutAnimeInput = {
    where: LatestWhereUniqueInput
    update: XOR<LatestUpdateWithoutAnimeInput, LatestUncheckedUpdateWithoutAnimeInput>
    create: XOR<LatestCreateWithoutAnimeInput, LatestUncheckedCreateWithoutAnimeInput>
  }

  export type LatestUpdateWithWhereUniqueWithoutAnimeInput = {
    where: LatestWhereUniqueInput
    data: XOR<LatestUpdateWithoutAnimeInput, LatestUncheckedUpdateWithoutAnimeInput>
  }

  export type LatestUpdateManyWithWhereWithoutAnimeInput = {
    where: LatestScalarWhereInput
    data: XOR<LatestUpdateManyMutationInput, LatestUncheckedUpdateManyWithoutAnimeInput>
  }

  export type LatestScalarWhereInput = {
    AND?: LatestScalarWhereInput | LatestScalarWhereInput[]
    OR?: LatestScalarWhereInput[]
    NOT?: LatestScalarWhereInput | LatestScalarWhereInput[]
    id?: IntFilter<"Latest"> | number
    timestamp?: StringFilter<"Latest"> | string
    episode?: StringFilter<"Latest"> | string
    lang?: StringFilter<"Latest"> | string
    anime_url?: StringFilter<"Latest"> | string
    anime_id?: IntFilter<"Latest"> | number
  }

  export type TagsByAnimeUpsertWithWhereUniqueWithoutAnimeInput = {
    where: TagsByAnimeWhereUniqueInput
    update: XOR<TagsByAnimeUpdateWithoutAnimeInput, TagsByAnimeUncheckedUpdateWithoutAnimeInput>
    create: XOR<TagsByAnimeCreateWithoutAnimeInput, TagsByAnimeUncheckedCreateWithoutAnimeInput>
  }

  export type TagsByAnimeUpdateWithWhereUniqueWithoutAnimeInput = {
    where: TagsByAnimeWhereUniqueInput
    data: XOR<TagsByAnimeUpdateWithoutAnimeInput, TagsByAnimeUncheckedUpdateWithoutAnimeInput>
  }

  export type TagsByAnimeUpdateManyWithWhereWithoutAnimeInput = {
    where: TagsByAnimeScalarWhereInput
    data: XOR<TagsByAnimeUpdateManyMutationInput, TagsByAnimeUncheckedUpdateManyWithoutAnimeInput>
  }

  export type TagsByAnimeScalarWhereInput = {
    AND?: TagsByAnimeScalarWhereInput | TagsByAnimeScalarWhereInput[]
    OR?: TagsByAnimeScalarWhereInput[]
    NOT?: TagsByAnimeScalarWhereInput | TagsByAnimeScalarWhereInput[]
    id?: IntFilter<"TagsByAnime"> | number
    tagId?: IntFilter<"TagsByAnime"> | number
    rank?: IntFilter<"TagsByAnime"> | number
    animeId?: IntNullableFilter<"TagsByAnime"> | number | null
  }

  export type EpisodeCreateWithoutAnimeHistoryInput = {
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    Anime: AnimeCreateNestedOneWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutAnimeHistoryInput = {
    id?: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
    anime_id: number
  }

  export type EpisodeCreateOrConnectWithoutAnimeHistoryInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutAnimeHistoryInput, EpisodeUncheckedCreateWithoutAnimeHistoryInput>
  }

  export type UserCreateWithoutAnimeHistoryInput = {
    email: string
    password?: string | null
    username: string
    discord_id?: string | null
    firebase_id?: string | null
    avatar_url?: string | null
    created_at?: Date | string
    updated_at: Date | string
    suscribtion_type?: number | null
    suscribtion_end?: Date | string | null
  }

  export type UserUncheckedCreateWithoutAnimeHistoryInput = {
    id?: number
    email: string
    password?: string | null
    username: string
    discord_id?: string | null
    firebase_id?: string | null
    avatar_url?: string | null
    created_at?: Date | string
    updated_at: Date | string
    suscribtion_type?: number | null
    suscribtion_end?: Date | string | null
  }

  export type UserCreateOrConnectWithoutAnimeHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnimeHistoryInput, UserUncheckedCreateWithoutAnimeHistoryInput>
  }

  export type EpisodeUpsertWithoutAnimeHistoryInput = {
    update: XOR<EpisodeUpdateWithoutAnimeHistoryInput, EpisodeUncheckedUpdateWithoutAnimeHistoryInput>
    create: XOR<EpisodeCreateWithoutAnimeHistoryInput, EpisodeUncheckedCreateWithoutAnimeHistoryInput>
    where?: EpisodeWhereInput
  }

  export type EpisodeUpdateToOneWithWhereWithoutAnimeHistoryInput = {
    where?: EpisodeWhereInput
    data: XOR<EpisodeUpdateWithoutAnimeHistoryInput, EpisodeUncheckedUpdateWithoutAnimeHistoryInput>
  }

  export type EpisodeUpdateWithoutAnimeHistoryInput = {
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    Anime?: AnimeUpdateOneRequiredWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutAnimeHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    anime_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutAnimeHistoryInput = {
    update: XOR<UserUpdateWithoutAnimeHistoryInput, UserUncheckedUpdateWithoutAnimeHistoryInput>
    create: XOR<UserCreateWithoutAnimeHistoryInput, UserUncheckedCreateWithoutAnimeHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnimeHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnimeHistoryInput, UserUncheckedUpdateWithoutAnimeHistoryInput>
  }

  export type UserUpdateWithoutAnimeHistoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutAnimeHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    discord_id?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_id?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    suscribtion_type?: NullableIntFieldUpdateOperationsInput | number | null
    suscribtion_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnimeHistoryCreateWithoutEpisodeInput = {
    timestamp: number
    duration: number
    User: UserCreateNestedOneWithoutAnimeHistoryInput
  }

  export type AnimeHistoryUncheckedCreateWithoutEpisodeInput = {
    id?: number
    timestamp: number
    duration: number
    user_id: number
  }

  export type AnimeHistoryCreateOrConnectWithoutEpisodeInput = {
    where: AnimeHistoryWhereUniqueInput
    create: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput>
  }

  export type AnimeHistoryCreateManyEpisodeInputEnvelope = {
    data: AnimeHistoryCreateManyEpisodeInput | AnimeHistoryCreateManyEpisodeInput[]
    skipDuplicates?: boolean
  }

  export type AnimeCreateWithoutEpisodeInput = {
    anilist_id?: number | null
    status: string
    popularity: number
    genres?: AnimeCreategenresInput | string[]
    bannerImage?: string | null
    coverImage: string
    description?: string | null
    duration?: number | null
    endDate?: Date | string | null
    episodes?: number | null
    description_fr?: string | null
    format: string
    idMal?: number | null
    isAdult?: boolean | null
    startDate: Date | string
    synonyms?: AnimeCreatesynonymsInput | string[]
    trailer: string
    trending: number
    url_anime_sama?: string | null
    url_fr_anime?: string | null
    url_neko?: string | null
    relations?: AnimeCreaterelationsInput | number[]
    title?: string | null
    titleenglish?: string | null
    titleromanji?: string | null
    Latest?: LatestCreateNestedManyWithoutAnimeInput
    Tags?: TagsByAnimeCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateWithoutEpisodeInput = {
    anilist_id?: number | null
    status: string
    popularity: number
    genres?: AnimeCreategenresInput | string[]
    bannerImage?: string | null
    coverImage: string
    description?: string | null
    duration?: number | null
    endDate?: Date | string | null
    episodes?: number | null
    description_fr?: string | null
    format: string
    idMal?: number | null
    isAdult?: boolean | null
    startDate: Date | string
    synonyms?: AnimeCreatesynonymsInput | string[]
    trailer: string
    trending: number
    url_anime_sama?: string | null
    url_fr_anime?: string | null
    url_neko?: string | null
    relations?: AnimeCreaterelationsInput | number[]
    Id?: number
    title?: string | null
    titleenglish?: string | null
    titleromanji?: string | null
    Latest?: LatestUncheckedCreateNestedManyWithoutAnimeInput
    Tags?: TagsByAnimeUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeCreateOrConnectWithoutEpisodeInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutEpisodeInput, AnimeUncheckedCreateWithoutEpisodeInput>
  }

  export type AnimeHistoryUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: AnimeHistoryWhereUniqueInput
    update: XOR<AnimeHistoryUpdateWithoutEpisodeInput, AnimeHistoryUncheckedUpdateWithoutEpisodeInput>
    create: XOR<AnimeHistoryCreateWithoutEpisodeInput, AnimeHistoryUncheckedCreateWithoutEpisodeInput>
  }

  export type AnimeHistoryUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: AnimeHistoryWhereUniqueInput
    data: XOR<AnimeHistoryUpdateWithoutEpisodeInput, AnimeHistoryUncheckedUpdateWithoutEpisodeInput>
  }

  export type AnimeHistoryUpdateManyWithWhereWithoutEpisodeInput = {
    where: AnimeHistoryScalarWhereInput
    data: XOR<AnimeHistoryUpdateManyMutationInput, AnimeHistoryUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type AnimeHistoryScalarWhereInput = {
    AND?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
    OR?: AnimeHistoryScalarWhereInput[]
    NOT?: AnimeHistoryScalarWhereInput | AnimeHistoryScalarWhereInput[]
    id?: IntFilter<"AnimeHistory"> | number
    timestamp?: IntFilter<"AnimeHistory"> | number
    duration?: IntFilter<"AnimeHistory"> | number
    episode_id?: IntFilter<"AnimeHistory"> | number
    user_id?: IntFilter<"AnimeHistory"> | number
  }

  export type AnimeUpsertWithoutEpisodeInput = {
    update: XOR<AnimeUpdateWithoutEpisodeInput, AnimeUncheckedUpdateWithoutEpisodeInput>
    create: XOR<AnimeCreateWithoutEpisodeInput, AnimeUncheckedCreateWithoutEpisodeInput>
    where?: AnimeWhereInput
  }

  export type AnimeUpdateToOneWithWhereWithoutEpisodeInput = {
    where?: AnimeWhereInput
    data: XOR<AnimeUpdateWithoutEpisodeInput, AnimeUncheckedUpdateWithoutEpisodeInput>
  }

  export type AnimeUpdateWithoutEpisodeInput = {
    anilist_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    genres?: AnimeUpdategenresInput | string[]
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: NullableIntFieldUpdateOperationsInput | number | null
    description_fr?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    idMal?: NullableIntFieldUpdateOperationsInput | number | null
    isAdult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    synonyms?: AnimeUpdatesynonymsInput | string[]
    trailer?: StringFieldUpdateOperationsInput | string
    trending?: IntFieldUpdateOperationsInput | number
    url_anime_sama?: NullableStringFieldUpdateOperationsInput | string | null
    url_fr_anime?: NullableStringFieldUpdateOperationsInput | string | null
    url_neko?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: AnimeUpdaterelationsInput | number[]
    title?: NullableStringFieldUpdateOperationsInput | string | null
    titleenglish?: NullableStringFieldUpdateOperationsInput | string | null
    titleromanji?: NullableStringFieldUpdateOperationsInput | string | null
    Latest?: LatestUpdateManyWithoutAnimeNestedInput
    Tags?: TagsByAnimeUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateWithoutEpisodeInput = {
    anilist_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    genres?: AnimeUpdategenresInput | string[]
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: NullableIntFieldUpdateOperationsInput | number | null
    description_fr?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    idMal?: NullableIntFieldUpdateOperationsInput | number | null
    isAdult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    synonyms?: AnimeUpdatesynonymsInput | string[]
    trailer?: StringFieldUpdateOperationsInput | string
    trending?: IntFieldUpdateOperationsInput | number
    url_anime_sama?: NullableStringFieldUpdateOperationsInput | string | null
    url_fr_anime?: NullableStringFieldUpdateOperationsInput | string | null
    url_neko?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: AnimeUpdaterelationsInput | number[]
    Id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    titleenglish?: NullableStringFieldUpdateOperationsInput | string | null
    titleromanji?: NullableStringFieldUpdateOperationsInput | string | null
    Latest?: LatestUncheckedUpdateManyWithoutAnimeNestedInput
    Tags?: TagsByAnimeUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeCreateWithoutLatestInput = {
    anilist_id?: number | null
    status: string
    popularity: number
    genres?: AnimeCreategenresInput | string[]
    bannerImage?: string | null
    coverImage: string
    description?: string | null
    duration?: number | null
    endDate?: Date | string | null
    episodes?: number | null
    description_fr?: string | null
    format: string
    idMal?: number | null
    isAdult?: boolean | null
    startDate: Date | string
    synonyms?: AnimeCreatesynonymsInput | string[]
    trailer: string
    trending: number
    url_anime_sama?: string | null
    url_fr_anime?: string | null
    url_neko?: string | null
    relations?: AnimeCreaterelationsInput | number[]
    title?: string | null
    titleenglish?: string | null
    titleromanji?: string | null
    Episode?: EpisodeCreateNestedManyWithoutAnimeInput
    Tags?: TagsByAnimeCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateWithoutLatestInput = {
    anilist_id?: number | null
    status: string
    popularity: number
    genres?: AnimeCreategenresInput | string[]
    bannerImage?: string | null
    coverImage: string
    description?: string | null
    duration?: number | null
    endDate?: Date | string | null
    episodes?: number | null
    description_fr?: string | null
    format: string
    idMal?: number | null
    isAdult?: boolean | null
    startDate: Date | string
    synonyms?: AnimeCreatesynonymsInput | string[]
    trailer: string
    trending: number
    url_anime_sama?: string | null
    url_fr_anime?: string | null
    url_neko?: string | null
    relations?: AnimeCreaterelationsInput | number[]
    Id?: number
    title?: string | null
    titleenglish?: string | null
    titleromanji?: string | null
    Episode?: EpisodeUncheckedCreateNestedManyWithoutAnimeInput
    Tags?: TagsByAnimeUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeCreateOrConnectWithoutLatestInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutLatestInput, AnimeUncheckedCreateWithoutLatestInput>
  }

  export type AnimeUpsertWithoutLatestInput = {
    update: XOR<AnimeUpdateWithoutLatestInput, AnimeUncheckedUpdateWithoutLatestInput>
    create: XOR<AnimeCreateWithoutLatestInput, AnimeUncheckedCreateWithoutLatestInput>
    where?: AnimeWhereInput
  }

  export type AnimeUpdateToOneWithWhereWithoutLatestInput = {
    where?: AnimeWhereInput
    data: XOR<AnimeUpdateWithoutLatestInput, AnimeUncheckedUpdateWithoutLatestInput>
  }

  export type AnimeUpdateWithoutLatestInput = {
    anilist_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    genres?: AnimeUpdategenresInput | string[]
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: NullableIntFieldUpdateOperationsInput | number | null
    description_fr?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    idMal?: NullableIntFieldUpdateOperationsInput | number | null
    isAdult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    synonyms?: AnimeUpdatesynonymsInput | string[]
    trailer?: StringFieldUpdateOperationsInput | string
    trending?: IntFieldUpdateOperationsInput | number
    url_anime_sama?: NullableStringFieldUpdateOperationsInput | string | null
    url_fr_anime?: NullableStringFieldUpdateOperationsInput | string | null
    url_neko?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: AnimeUpdaterelationsInput | number[]
    title?: NullableStringFieldUpdateOperationsInput | string | null
    titleenglish?: NullableStringFieldUpdateOperationsInput | string | null
    titleromanji?: NullableStringFieldUpdateOperationsInput | string | null
    Episode?: EpisodeUpdateManyWithoutAnimeNestedInput
    Tags?: TagsByAnimeUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateWithoutLatestInput = {
    anilist_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    genres?: AnimeUpdategenresInput | string[]
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: NullableIntFieldUpdateOperationsInput | number | null
    description_fr?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    idMal?: NullableIntFieldUpdateOperationsInput | number | null
    isAdult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    synonyms?: AnimeUpdatesynonymsInput | string[]
    trailer?: StringFieldUpdateOperationsInput | string
    trending?: IntFieldUpdateOperationsInput | number
    url_anime_sama?: NullableStringFieldUpdateOperationsInput | string | null
    url_fr_anime?: NullableStringFieldUpdateOperationsInput | string | null
    url_neko?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: AnimeUpdaterelationsInput | number[]
    Id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    titleenglish?: NullableStringFieldUpdateOperationsInput | string | null
    titleromanji?: NullableStringFieldUpdateOperationsInput | string | null
    Episode?: EpisodeUncheckedUpdateManyWithoutAnimeNestedInput
    Tags?: TagsByAnimeUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type TagsByAnimeCreateWithoutTagsInput = {
    rank: number
    anime?: AnimeCreateNestedOneWithoutTagsInput
  }

  export type TagsByAnimeUncheckedCreateWithoutTagsInput = {
    id?: number
    rank: number
    animeId?: number | null
  }

  export type TagsByAnimeCreateOrConnectWithoutTagsInput = {
    where: TagsByAnimeWhereUniqueInput
    create: XOR<TagsByAnimeCreateWithoutTagsInput, TagsByAnimeUncheckedCreateWithoutTagsInput>
  }

  export type TagsByAnimeCreateManyTagsInputEnvelope = {
    data: TagsByAnimeCreateManyTagsInput | TagsByAnimeCreateManyTagsInput[]
    skipDuplicates?: boolean
  }

  export type TagsByAnimeUpsertWithWhereUniqueWithoutTagsInput = {
    where: TagsByAnimeWhereUniqueInput
    update: XOR<TagsByAnimeUpdateWithoutTagsInput, TagsByAnimeUncheckedUpdateWithoutTagsInput>
    create: XOR<TagsByAnimeCreateWithoutTagsInput, TagsByAnimeUncheckedCreateWithoutTagsInput>
  }

  export type TagsByAnimeUpdateWithWhereUniqueWithoutTagsInput = {
    where: TagsByAnimeWhereUniqueInput
    data: XOR<TagsByAnimeUpdateWithoutTagsInput, TagsByAnimeUncheckedUpdateWithoutTagsInput>
  }

  export type TagsByAnimeUpdateManyWithWhereWithoutTagsInput = {
    where: TagsByAnimeScalarWhereInput
    data: XOR<TagsByAnimeUpdateManyMutationInput, TagsByAnimeUncheckedUpdateManyWithoutTagsInput>
  }

  export type AnimeCreateWithoutTagsInput = {
    anilist_id?: number | null
    status: string
    popularity: number
    genres?: AnimeCreategenresInput | string[]
    bannerImage?: string | null
    coverImage: string
    description?: string | null
    duration?: number | null
    endDate?: Date | string | null
    episodes?: number | null
    description_fr?: string | null
    format: string
    idMal?: number | null
    isAdult?: boolean | null
    startDate: Date | string
    synonyms?: AnimeCreatesynonymsInput | string[]
    trailer: string
    trending: number
    url_anime_sama?: string | null
    url_fr_anime?: string | null
    url_neko?: string | null
    relations?: AnimeCreaterelationsInput | number[]
    title?: string | null
    titleenglish?: string | null
    titleromanji?: string | null
    Episode?: EpisodeCreateNestedManyWithoutAnimeInput
    Latest?: LatestCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateWithoutTagsInput = {
    anilist_id?: number | null
    status: string
    popularity: number
    genres?: AnimeCreategenresInput | string[]
    bannerImage?: string | null
    coverImage: string
    description?: string | null
    duration?: number | null
    endDate?: Date | string | null
    episodes?: number | null
    description_fr?: string | null
    format: string
    idMal?: number | null
    isAdult?: boolean | null
    startDate: Date | string
    synonyms?: AnimeCreatesynonymsInput | string[]
    trailer: string
    trending: number
    url_anime_sama?: string | null
    url_fr_anime?: string | null
    url_neko?: string | null
    relations?: AnimeCreaterelationsInput | number[]
    Id?: number
    title?: string | null
    titleenglish?: string | null
    titleromanji?: string | null
    Episode?: EpisodeUncheckedCreateNestedManyWithoutAnimeInput
    Latest?: LatestUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeCreateOrConnectWithoutTagsInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutTagsInput, AnimeUncheckedCreateWithoutTagsInput>
  }

  export type TagsCreateWithoutTagsByAnimeInput = {
    id: number
    name: string
  }

  export type TagsUncheckedCreateWithoutTagsByAnimeInput = {
    id: number
    name: string
  }

  export type TagsCreateOrConnectWithoutTagsByAnimeInput = {
    where: TagsWhereUniqueInput
    create: XOR<TagsCreateWithoutTagsByAnimeInput, TagsUncheckedCreateWithoutTagsByAnimeInput>
  }

  export type AnimeUpsertWithoutTagsInput = {
    update: XOR<AnimeUpdateWithoutTagsInput, AnimeUncheckedUpdateWithoutTagsInput>
    create: XOR<AnimeCreateWithoutTagsInput, AnimeUncheckedCreateWithoutTagsInput>
    where?: AnimeWhereInput
  }

  export type AnimeUpdateToOneWithWhereWithoutTagsInput = {
    where?: AnimeWhereInput
    data: XOR<AnimeUpdateWithoutTagsInput, AnimeUncheckedUpdateWithoutTagsInput>
  }

  export type AnimeUpdateWithoutTagsInput = {
    anilist_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    genres?: AnimeUpdategenresInput | string[]
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: NullableIntFieldUpdateOperationsInput | number | null
    description_fr?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    idMal?: NullableIntFieldUpdateOperationsInput | number | null
    isAdult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    synonyms?: AnimeUpdatesynonymsInput | string[]
    trailer?: StringFieldUpdateOperationsInput | string
    trending?: IntFieldUpdateOperationsInput | number
    url_anime_sama?: NullableStringFieldUpdateOperationsInput | string | null
    url_fr_anime?: NullableStringFieldUpdateOperationsInput | string | null
    url_neko?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: AnimeUpdaterelationsInput | number[]
    title?: NullableStringFieldUpdateOperationsInput | string | null
    titleenglish?: NullableStringFieldUpdateOperationsInput | string | null
    titleromanji?: NullableStringFieldUpdateOperationsInput | string | null
    Episode?: EpisodeUpdateManyWithoutAnimeNestedInput
    Latest?: LatestUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateWithoutTagsInput = {
    anilist_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    genres?: AnimeUpdategenresInput | string[]
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    episodes?: NullableIntFieldUpdateOperationsInput | number | null
    description_fr?: NullableStringFieldUpdateOperationsInput | string | null
    format?: StringFieldUpdateOperationsInput | string
    idMal?: NullableIntFieldUpdateOperationsInput | number | null
    isAdult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    synonyms?: AnimeUpdatesynonymsInput | string[]
    trailer?: StringFieldUpdateOperationsInput | string
    trending?: IntFieldUpdateOperationsInput | number
    url_anime_sama?: NullableStringFieldUpdateOperationsInput | string | null
    url_fr_anime?: NullableStringFieldUpdateOperationsInput | string | null
    url_neko?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: AnimeUpdaterelationsInput | number[]
    Id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    titleenglish?: NullableStringFieldUpdateOperationsInput | string | null
    titleromanji?: NullableStringFieldUpdateOperationsInput | string | null
    Episode?: EpisodeUncheckedUpdateManyWithoutAnimeNestedInput
    Latest?: LatestUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type TagsUpsertWithoutTagsByAnimeInput = {
    update: XOR<TagsUpdateWithoutTagsByAnimeInput, TagsUncheckedUpdateWithoutTagsByAnimeInput>
    create: XOR<TagsCreateWithoutTagsByAnimeInput, TagsUncheckedCreateWithoutTagsByAnimeInput>
    where?: TagsWhereInput
  }

  export type TagsUpdateToOneWithWhereWithoutTagsByAnimeInput = {
    where?: TagsWhereInput
    data: XOR<TagsUpdateWithoutTagsByAnimeInput, TagsUncheckedUpdateWithoutTagsByAnimeInput>
  }

  export type TagsUpdateWithoutTagsByAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsUncheckedUpdateWithoutTagsByAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeHistoryCreateWithoutUserInput = {
    timestamp: number
    duration: number
    Episode: EpisodeCreateNestedOneWithoutAnimeHistoryInput
  }

  export type AnimeHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    timestamp: number
    duration: number
    episode_id: number
  }

  export type AnimeHistoryCreateOrConnectWithoutUserInput = {
    where: AnimeHistoryWhereUniqueInput
    create: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput>
  }

  export type AnimeHistoryCreateManyUserInputEnvelope = {
    data: AnimeHistoryCreateManyUserInput | AnimeHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnimeHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: AnimeHistoryWhereUniqueInput
    update: XOR<AnimeHistoryUpdateWithoutUserInput, AnimeHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<AnimeHistoryCreateWithoutUserInput, AnimeHistoryUncheckedCreateWithoutUserInput>
  }

  export type AnimeHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: AnimeHistoryWhereUniqueInput
    data: XOR<AnimeHistoryUpdateWithoutUserInput, AnimeHistoryUncheckedUpdateWithoutUserInput>
  }

  export type AnimeHistoryUpdateManyWithWhereWithoutUserInput = {
    where: AnimeHistoryScalarWhereInput
    data: XOR<AnimeHistoryUpdateManyMutationInput, AnimeHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type EpisodeCreateManyAnimeInput = {
    id?: number
    time: string
    episode: string
    num: number
    url: string
    url_image: string
  }

  export type LatestCreateManyAnimeInput = {
    id?: number
    timestamp: string
    episode: string
    lang: string
    anime_url: string
  }

  export type TagsByAnimeCreateManyAnimeInput = {
    id?: number
    tagId: number
    rank: number
  }

  export type EpisodeUpdateWithoutAnimeInput = {
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    AnimeHistory?: AnimeHistoryUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
    AnimeHistory?: AnimeHistoryUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateManyWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    num?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    url_image?: StringFieldUpdateOperationsInput | string
  }

  export type LatestUpdateWithoutAnimeInput = {
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
  }

  export type LatestUncheckedUpdateWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
  }

  export type LatestUncheckedUpdateManyWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: StringFieldUpdateOperationsInput | string
    episode?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    anime_url?: StringFieldUpdateOperationsInput | string
  }

  export type TagsByAnimeUpdateWithoutAnimeInput = {
    rank?: IntFieldUpdateOperationsInput | number
    Tags?: TagsUpdateOneRequiredWithoutTagsByAnimeNestedInput
  }

  export type TagsByAnimeUncheckedUpdateWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type TagsByAnimeUncheckedUpdateManyWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type AnimeHistoryCreateManyEpisodeInput = {
    id?: number
    timestamp: number
    duration: number
    user_id: number
  }

  export type AnimeHistoryUpdateWithoutEpisodeInput = {
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutAnimeHistoryNestedInput
  }

  export type AnimeHistoryUncheckedUpdateWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnimeHistoryUncheckedUpdateManyWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TagsByAnimeCreateManyTagsInput = {
    id?: number
    rank: number
    animeId?: number | null
  }

  export type TagsByAnimeUpdateWithoutTagsInput = {
    rank?: IntFieldUpdateOperationsInput | number
    anime?: AnimeUpdateOneWithoutTagsNestedInput
  }

  export type TagsByAnimeUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    animeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagsByAnimeUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    animeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AnimeHistoryCreateManyUserInput = {
    id?: number
    timestamp: number
    duration: number
    episode_id: number
  }

  export type AnimeHistoryUpdateWithoutUserInput = {
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    Episode?: EpisodeUpdateOneRequiredWithoutAnimeHistoryNestedInput
  }

  export type AnimeHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    episode_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnimeHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    episode_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AnimeCountOutputTypeDefaultArgs instead
     */
    export type AnimeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnimeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EpisodeCountOutputTypeDefaultArgs instead
     */
    export type EpisodeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EpisodeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagsCountOutputTypeDefaultArgs instead
     */
    export type TagsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnimeDefaultArgs instead
     */
    export type AnimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnimeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnimeHistoryDefaultArgs instead
     */
    export type AnimeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnimeHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EpisodeDefaultArgs instead
     */
    export type EpisodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EpisodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LatestDefaultArgs instead
     */
    export type LatestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LatestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagsDefaultArgs instead
     */
    export type TagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagsByAnimeDefaultArgs instead
     */
    export type TagsByAnimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagsByAnimeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}