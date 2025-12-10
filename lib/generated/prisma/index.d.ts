
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model LabRoom
 * 
 */
export type LabRoom = $Result.DefaultSelection<Prisma.$LabRoomPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseOffering
 * 
 */
export type CourseOffering = $Result.DefaultSelection<Prisma.$CourseOfferingPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model LabAssistant
 * 
 */
export type LabAssistant = $Result.DefaultSelection<Prisma.$LabAssistantPayload>
/**
 * Model TimeSlot
 * 
 */
export type TimeSlot = $Result.DefaultSelection<Prisma.$TimeSlotPayload>
/**
 * Model ScheduleAssignment
 * 
 */
export type ScheduleAssignment = $Result.DefaultSelection<Prisma.$ScheduleAssignmentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SlotType: {
  Lab: 'Lab',
  Lecture: 'Lecture',
  Tutorial: 'Tutorial'
};

export type SlotType = (typeof SlotType)[keyof typeof SlotType]

}

export type SlotType = $Enums.SlotType

export const SlotType: typeof $Enums.SlotType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LabRooms
 * const labRooms = await prisma.labRoom.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more LabRooms
   * const labRooms = await prisma.labRoom.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.labRoom`: Exposes CRUD operations for the **LabRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabRooms
    * const labRooms = await prisma.labRoom.findMany()
    * ```
    */
  get labRoom(): Prisma.LabRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseOffering`: Exposes CRUD operations for the **CourseOffering** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseOfferings
    * const courseOfferings = await prisma.courseOffering.findMany()
    * ```
    */
  get courseOffering(): Prisma.CourseOfferingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labAssistant`: Exposes CRUD operations for the **LabAssistant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LabAssistants
    * const labAssistants = await prisma.labAssistant.findMany()
    * ```
    */
  get labAssistant(): Prisma.LabAssistantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeSlot`: Exposes CRUD operations for the **TimeSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeSlots
    * const timeSlots = await prisma.timeSlot.findMany()
    * ```
    */
  get timeSlot(): Prisma.TimeSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduleAssignment`: Exposes CRUD operations for the **ScheduleAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleAssignments
    * const scheduleAssignments = await prisma.scheduleAssignment.findMany()
    * ```
    */
  get scheduleAssignment(): Prisma.ScheduleAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    LabRoom: 'LabRoom',
    Course: 'Course',
    CourseOffering: 'CourseOffering',
    Section: 'Section',
    Group: 'Group',
    LabAssistant: 'LabAssistant',
    TimeSlot: 'TimeSlot',
    ScheduleAssignment: 'ScheduleAssignment',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "labRoom" | "course" | "courseOffering" | "section" | "group" | "labAssistant" | "timeSlot" | "scheduleAssignment" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LabRoom: {
        payload: Prisma.$LabRoomPayload<ExtArgs>
        fields: Prisma.LabRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          findFirst: {
            args: Prisma.LabRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          findMany: {
            args: Prisma.LabRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>[]
          }
          create: {
            args: Prisma.LabRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          createMany: {
            args: Prisma.LabRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>[]
          }
          delete: {
            args: Prisma.LabRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          update: {
            args: Prisma.LabRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          deleteMany: {
            args: Prisma.LabRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>[]
          }
          upsert: {
            args: Prisma.LabRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabRoomPayload>
          }
          aggregate: {
            args: Prisma.LabRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabRoom>
          }
          groupBy: {
            args: Prisma.LabRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabRoomCountArgs<ExtArgs>
            result: $Utils.Optional<LabRoomCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseOffering: {
        payload: Prisma.$CourseOfferingPayload<ExtArgs>
        fields: Prisma.CourseOfferingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseOfferingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseOfferingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          findFirst: {
            args: Prisma.CourseOfferingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseOfferingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          findMany: {
            args: Prisma.CourseOfferingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          create: {
            args: Prisma.CourseOfferingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          createMany: {
            args: Prisma.CourseOfferingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseOfferingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          delete: {
            args: Prisma.CourseOfferingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          update: {
            args: Prisma.CourseOfferingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          deleteMany: {
            args: Prisma.CourseOfferingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseOfferingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseOfferingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          upsert: {
            args: Prisma.CourseOfferingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          aggregate: {
            args: Prisma.CourseOfferingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseOffering>
          }
          groupBy: {
            args: Prisma.CourseOfferingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseOfferingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseOfferingCountArgs<ExtArgs>
            result: $Utils.Optional<CourseOfferingCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      LabAssistant: {
        payload: Prisma.$LabAssistantPayload<ExtArgs>
        fields: Prisma.LabAssistantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabAssistantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabAssistantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          findFirst: {
            args: Prisma.LabAssistantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabAssistantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          findMany: {
            args: Prisma.LabAssistantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>[]
          }
          create: {
            args: Prisma.LabAssistantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          createMany: {
            args: Prisma.LabAssistantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabAssistantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>[]
          }
          delete: {
            args: Prisma.LabAssistantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          update: {
            args: Prisma.LabAssistantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          deleteMany: {
            args: Prisma.LabAssistantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabAssistantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabAssistantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>[]
          }
          upsert: {
            args: Prisma.LabAssistantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabAssistantPayload>
          }
          aggregate: {
            args: Prisma.LabAssistantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabAssistant>
          }
          groupBy: {
            args: Prisma.LabAssistantGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabAssistantGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabAssistantCountArgs<ExtArgs>
            result: $Utils.Optional<LabAssistantCountAggregateOutputType> | number
          }
        }
      }
      TimeSlot: {
        payload: Prisma.$TimeSlotPayload<ExtArgs>
        fields: Prisma.TimeSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          findFirst: {
            args: Prisma.TimeSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          findMany: {
            args: Prisma.TimeSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>[]
          }
          create: {
            args: Prisma.TimeSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          createMany: {
            args: Prisma.TimeSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>[]
          }
          delete: {
            args: Prisma.TimeSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          update: {
            args: Prisma.TimeSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          deleteMany: {
            args: Prisma.TimeSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>[]
          }
          upsert: {
            args: Prisma.TimeSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          aggregate: {
            args: Prisma.TimeSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeSlot>
          }
          groupBy: {
            args: Prisma.TimeSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeSlotCountArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotCountAggregateOutputType> | number
          }
        }
      }
      ScheduleAssignment: {
        payload: Prisma.$ScheduleAssignmentPayload<ExtArgs>
        fields: Prisma.ScheduleAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ScheduleAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          findMany: {
            args: Prisma.ScheduleAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>[]
          }
          create: {
            args: Prisma.ScheduleAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          createMany: {
            args: Prisma.ScheduleAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ScheduleAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          update: {
            args: Prisma.ScheduleAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ScheduleAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ScheduleAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleAssignment>
          }
          groupBy: {
            args: Prisma.ScheduleAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleAssignmentCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    labRoom?: LabRoomOmit
    course?: CourseOmit
    courseOffering?: CourseOfferingOmit
    section?: SectionOmit
    group?: GroupOmit
    labAssistant?: LabAssistantOmit
    timeSlot?: TimeSlotOmit
    scheduleAssignment?: ScheduleAssignmentOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type LabRoomCountOutputType
   */

  export type LabRoomCountOutputType = {
    ScheduleAssignments: number
  }

  export type LabRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScheduleAssignments?: boolean | LabRoomCountOutputTypeCountScheduleAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * LabRoomCountOutputType without action
   */
  export type LabRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoomCountOutputType
     */
    select?: LabRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabRoomCountOutputType without action
   */
  export type LabRoomCountOutputTypeCountScheduleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleAssignmentWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    CourseOfferings: number
    ScheduleAssignment: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CourseOfferings?: boolean | CourseCountOutputTypeCountCourseOfferingsArgs
    ScheduleAssignment?: boolean | CourseCountOutputTypeCountScheduleAssignmentArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseOfferingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseOfferingWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountScheduleAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleAssignmentWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    Groups: number
    ScheduleAssignment: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Groups?: boolean | SectionCountOutputTypeCountGroupsArgs
    ScheduleAssignment?: boolean | SectionCountOutputTypeCountScheduleAssignmentArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountScheduleAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleAssignmentWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    ScheduleAssignment: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScheduleAssignment?: boolean | GroupCountOutputTypeCountScheduleAssignmentArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountScheduleAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleAssignmentWhereInput
  }


  /**
   * Count Type LabAssistantCountOutputType
   */

  export type LabAssistantCountOutputType = {
    ScheduleAssignments: number
  }

  export type LabAssistantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScheduleAssignments?: boolean | LabAssistantCountOutputTypeCountScheduleAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * LabAssistantCountOutputType without action
   */
  export type LabAssistantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistantCountOutputType
     */
    select?: LabAssistantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabAssistantCountOutputType without action
   */
  export type LabAssistantCountOutputTypeCountScheduleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleAssignmentWhereInput
  }


  /**
   * Count Type TimeSlotCountOutputType
   */

  export type TimeSlotCountOutputType = {
    ScheduleAssignments: number
  }

  export type TimeSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScheduleAssignments?: boolean | TimeSlotCountOutputTypeCountScheduleAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * TimeSlotCountOutputType without action
   */
  export type TimeSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlotCountOutputType
     */
    select?: TimeSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimeSlotCountOutputType without action
   */
  export type TimeSlotCountOutputTypeCountScheduleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LabRoom
   */

  export type AggregateLabRoom = {
    _count: LabRoomCountAggregateOutputType | null
    _avg: LabRoomAvgAggregateOutputType | null
    _sum: LabRoomSumAggregateOutputType | null
    _min: LabRoomMinAggregateOutputType | null
    _max: LabRoomMaxAggregateOutputType | null
  }

  export type LabRoomAvgAggregateOutputType = {
    capacity: number | null
  }

  export type LabRoomSumAggregateOutputType = {
    capacity: number | null
  }

  export type LabRoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    location: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabRoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    location: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabRoomCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    location: number
    equipment: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LabRoomAvgAggregateInputType = {
    capacity?: true
  }

  export type LabRoomSumAggregateInputType = {
    capacity?: true
  }

  export type LabRoomMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    location?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabRoomMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    location?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabRoomCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    location?: true
    equipment?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LabRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabRoom to aggregate.
     */
    where?: LabRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRooms to fetch.
     */
    orderBy?: LabRoomOrderByWithRelationInput | LabRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabRooms
    **/
    _count?: true | LabRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabRoomMaxAggregateInputType
  }

  export type GetLabRoomAggregateType<T extends LabRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateLabRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabRoom[P]>
      : GetScalarType<T[P], AggregateLabRoom[P]>
  }




  export type LabRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabRoomWhereInput
    orderBy?: LabRoomOrderByWithAggregationInput | LabRoomOrderByWithAggregationInput[]
    by: LabRoomScalarFieldEnum[] | LabRoomScalarFieldEnum
    having?: LabRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabRoomCountAggregateInputType | true
    _avg?: LabRoomAvgAggregateInputType
    _sum?: LabRoomSumAggregateInputType
    _min?: LabRoomMinAggregateInputType
    _max?: LabRoomMaxAggregateInputType
  }

  export type LabRoomGroupByOutputType = {
    id: string
    name: string
    capacity: number
    location: string
    equipment: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: LabRoomCountAggregateOutputType | null
    _avg: LabRoomAvgAggregateOutputType | null
    _sum: LabRoomSumAggregateOutputType | null
    _min: LabRoomMinAggregateOutputType | null
    _max: LabRoomMaxAggregateOutputType | null
  }

  type GetLabRoomGroupByPayload<T extends LabRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabRoomGroupByOutputType[P]>
            : GetScalarType<T[P], LabRoomGroupByOutputType[P]>
        }
      >
    >


  export type LabRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    location?: boolean
    equipment?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ScheduleAssignments?: boolean | LabRoom$ScheduleAssignmentsArgs<ExtArgs>
    _count?: boolean | LabRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labRoom"]>

  export type LabRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    location?: boolean
    equipment?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["labRoom"]>

  export type LabRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    location?: boolean
    equipment?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["labRoom"]>

  export type LabRoomSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    location?: boolean
    equipment?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LabRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "capacity" | "location" | "equipment" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["labRoom"]>
  export type LabRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScheduleAssignments?: boolean | LabRoom$ScheduleAssignmentsArgs<ExtArgs>
    _count?: boolean | LabRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LabRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LabRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabRoom"
    objects: {
      ScheduleAssignments: Prisma.$ScheduleAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      capacity: number
      location: string
      equipment: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["labRoom"]>
    composites: {}
  }

  type LabRoomGetPayload<S extends boolean | null | undefined | LabRoomDefaultArgs> = $Result.GetResult<Prisma.$LabRoomPayload, S>

  type LabRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabRoomCountAggregateInputType | true
    }

  export interface LabRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabRoom'], meta: { name: 'LabRoom' } }
    /**
     * Find zero or one LabRoom that matches the filter.
     * @param {LabRoomFindUniqueArgs} args - Arguments to find a LabRoom
     * @example
     * // Get one LabRoom
     * const labRoom = await prisma.labRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabRoomFindUniqueArgs>(args: SelectSubset<T, LabRoomFindUniqueArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabRoomFindUniqueOrThrowArgs} args - Arguments to find a LabRoom
     * @example
     * // Get one LabRoom
     * const labRoom = await prisma.labRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, LabRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomFindFirstArgs} args - Arguments to find a LabRoom
     * @example
     * // Get one LabRoom
     * const labRoom = await prisma.labRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabRoomFindFirstArgs>(args?: SelectSubset<T, LabRoomFindFirstArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomFindFirstOrThrowArgs} args - Arguments to find a LabRoom
     * @example
     * // Get one LabRoom
     * const labRoom = await prisma.labRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, LabRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabRooms
     * const labRooms = await prisma.labRoom.findMany()
     * 
     * // Get first 10 LabRooms
     * const labRooms = await prisma.labRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labRoomWithIdOnly = await prisma.labRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabRoomFindManyArgs>(args?: SelectSubset<T, LabRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabRoom.
     * @param {LabRoomCreateArgs} args - Arguments to create a LabRoom.
     * @example
     * // Create one LabRoom
     * const LabRoom = await prisma.labRoom.create({
     *   data: {
     *     // ... data to create a LabRoom
     *   }
     * })
     * 
     */
    create<T extends LabRoomCreateArgs>(args: SelectSubset<T, LabRoomCreateArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabRooms.
     * @param {LabRoomCreateManyArgs} args - Arguments to create many LabRooms.
     * @example
     * // Create many LabRooms
     * const labRoom = await prisma.labRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabRoomCreateManyArgs>(args?: SelectSubset<T, LabRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabRooms and returns the data saved in the database.
     * @param {LabRoomCreateManyAndReturnArgs} args - Arguments to create many LabRooms.
     * @example
     * // Create many LabRooms
     * const labRoom = await prisma.labRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabRooms and only return the `id`
     * const labRoomWithIdOnly = await prisma.labRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, LabRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabRoom.
     * @param {LabRoomDeleteArgs} args - Arguments to delete one LabRoom.
     * @example
     * // Delete one LabRoom
     * const LabRoom = await prisma.labRoom.delete({
     *   where: {
     *     // ... filter to delete one LabRoom
     *   }
     * })
     * 
     */
    delete<T extends LabRoomDeleteArgs>(args: SelectSubset<T, LabRoomDeleteArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabRoom.
     * @param {LabRoomUpdateArgs} args - Arguments to update one LabRoom.
     * @example
     * // Update one LabRoom
     * const labRoom = await prisma.labRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabRoomUpdateArgs>(args: SelectSubset<T, LabRoomUpdateArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabRooms.
     * @param {LabRoomDeleteManyArgs} args - Arguments to filter LabRooms to delete.
     * @example
     * // Delete a few LabRooms
     * const { count } = await prisma.labRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabRoomDeleteManyArgs>(args?: SelectSubset<T, LabRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabRooms
     * const labRoom = await prisma.labRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabRoomUpdateManyArgs>(args: SelectSubset<T, LabRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabRooms and returns the data updated in the database.
     * @param {LabRoomUpdateManyAndReturnArgs} args - Arguments to update many LabRooms.
     * @example
     * // Update many LabRooms
     * const labRoom = await prisma.labRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabRooms and only return the `id`
     * const labRoomWithIdOnly = await prisma.labRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LabRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, LabRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabRoom.
     * @param {LabRoomUpsertArgs} args - Arguments to update or create a LabRoom.
     * @example
     * // Update or create a LabRoom
     * const labRoom = await prisma.labRoom.upsert({
     *   create: {
     *     // ... data to create a LabRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabRoom we want to update
     *   }
     * })
     */
    upsert<T extends LabRoomUpsertArgs>(args: SelectSubset<T, LabRoomUpsertArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomCountArgs} args - Arguments to filter LabRooms to count.
     * @example
     * // Count the number of LabRooms
     * const count = await prisma.labRoom.count({
     *   where: {
     *     // ... the filter for the LabRooms we want to count
     *   }
     * })
    **/
    count<T extends LabRoomCountArgs>(
      args?: Subset<T, LabRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabRoomAggregateArgs>(args: Subset<T, LabRoomAggregateArgs>): Prisma.PrismaPromise<GetLabRoomAggregateType<T>>

    /**
     * Group by LabRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabRoomGroupByArgs} args - Group by arguments.
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
      T extends LabRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabRoomGroupByArgs['orderBy'] }
        : { orderBy?: LabRoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabRoom model
   */
  readonly fields: LabRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ScheduleAssignments<T extends LabRoom$ScheduleAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, LabRoom$ScheduleAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LabRoom model
   */
  interface LabRoomFieldRefs {
    readonly id: FieldRef<"LabRoom", 'String'>
    readonly name: FieldRef<"LabRoom", 'String'>
    readonly capacity: FieldRef<"LabRoom", 'Int'>
    readonly location: FieldRef<"LabRoom", 'String'>
    readonly equipment: FieldRef<"LabRoom", 'String[]'>
    readonly isActive: FieldRef<"LabRoom", 'Boolean'>
    readonly createdAt: FieldRef<"LabRoom", 'DateTime'>
    readonly updatedAt: FieldRef<"LabRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LabRoom findUnique
   */
  export type LabRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter, which LabRoom to fetch.
     */
    where: LabRoomWhereUniqueInput
  }

  /**
   * LabRoom findUniqueOrThrow
   */
  export type LabRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter, which LabRoom to fetch.
     */
    where: LabRoomWhereUniqueInput
  }

  /**
   * LabRoom findFirst
   */
  export type LabRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter, which LabRoom to fetch.
     */
    where?: LabRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRooms to fetch.
     */
    orderBy?: LabRoomOrderByWithRelationInput | LabRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabRooms.
     */
    cursor?: LabRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabRooms.
     */
    distinct?: LabRoomScalarFieldEnum | LabRoomScalarFieldEnum[]
  }

  /**
   * LabRoom findFirstOrThrow
   */
  export type LabRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter, which LabRoom to fetch.
     */
    where?: LabRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRooms to fetch.
     */
    orderBy?: LabRoomOrderByWithRelationInput | LabRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabRooms.
     */
    cursor?: LabRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabRooms.
     */
    distinct?: LabRoomScalarFieldEnum | LabRoomScalarFieldEnum[]
  }

  /**
   * LabRoom findMany
   */
  export type LabRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter, which LabRooms to fetch.
     */
    where?: LabRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabRooms to fetch.
     */
    orderBy?: LabRoomOrderByWithRelationInput | LabRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabRooms.
     */
    cursor?: LabRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabRooms.
     */
    skip?: number
    distinct?: LabRoomScalarFieldEnum | LabRoomScalarFieldEnum[]
  }

  /**
   * LabRoom create
   */
  export type LabRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a LabRoom.
     */
    data: XOR<LabRoomCreateInput, LabRoomUncheckedCreateInput>
  }

  /**
   * LabRoom createMany
   */
  export type LabRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabRooms.
     */
    data: LabRoomCreateManyInput | LabRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabRoom createManyAndReturn
   */
  export type LabRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * The data used to create many LabRooms.
     */
    data: LabRoomCreateManyInput | LabRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabRoom update
   */
  export type LabRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a LabRoom.
     */
    data: XOR<LabRoomUpdateInput, LabRoomUncheckedUpdateInput>
    /**
     * Choose, which LabRoom to update.
     */
    where: LabRoomWhereUniqueInput
  }

  /**
   * LabRoom updateMany
   */
  export type LabRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabRooms.
     */
    data: XOR<LabRoomUpdateManyMutationInput, LabRoomUncheckedUpdateManyInput>
    /**
     * Filter which LabRooms to update
     */
    where?: LabRoomWhereInput
    /**
     * Limit how many LabRooms to update.
     */
    limit?: number
  }

  /**
   * LabRoom updateManyAndReturn
   */
  export type LabRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * The data used to update LabRooms.
     */
    data: XOR<LabRoomUpdateManyMutationInput, LabRoomUncheckedUpdateManyInput>
    /**
     * Filter which LabRooms to update
     */
    where?: LabRoomWhereInput
    /**
     * Limit how many LabRooms to update.
     */
    limit?: number
  }

  /**
   * LabRoom upsert
   */
  export type LabRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the LabRoom to update in case it exists.
     */
    where: LabRoomWhereUniqueInput
    /**
     * In case the LabRoom found by the `where` argument doesn't exist, create a new LabRoom with this data.
     */
    create: XOR<LabRoomCreateInput, LabRoomUncheckedCreateInput>
    /**
     * In case the LabRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabRoomUpdateInput, LabRoomUncheckedUpdateInput>
  }

  /**
   * LabRoom delete
   */
  export type LabRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
    /**
     * Filter which LabRoom to delete.
     */
    where: LabRoomWhereUniqueInput
  }

  /**
   * LabRoom deleteMany
   */
  export type LabRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabRooms to delete
     */
    where?: LabRoomWhereInput
    /**
     * Limit how many LabRooms to delete.
     */
    limit?: number
  }

  /**
   * LabRoom.ScheduleAssignments
   */
  export type LabRoom$ScheduleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    where?: ScheduleAssignmentWhereInput
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    cursor?: ScheduleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * LabRoom without action
   */
  export type LabRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabRoom
     */
    select?: LabRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabRoom
     */
    omit?: LabRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabRoomInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    credits: number | null
    year: number | null
  }

  export type CourseSumAggregateOutputType = {
    credits: number | null
    year: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    department: string | null
    credits: number | null
    year: number | null
    section: string | null
    batch: string | null
    studentType: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    department: string | null
    credits: number | null
    year: number | null
    section: string | null
    batch: string | null
    studentType: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    code: number
    name: number
    department: number
    credits: number
    year: number
    section: number
    batch: number
    studentType: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    credits?: true
    year?: true
  }

  export type CourseSumAggregateInputType = {
    credits?: true
    year?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    department?: true
    credits?: true
    year?: true
    section?: true
    batch?: true
    studentType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    department?: true
    credits?: true
    year?: true
    section?: true
    batch?: true
    studentType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    department?: true
    credits?: true
    year?: true
    section?: true
    batch?: true
    studentType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    code: string
    name: string
    department: string
    credits: number
    year: number
    section: string
    batch: string
    studentType: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    department?: boolean
    credits?: boolean
    year?: boolean
    section?: boolean
    batch?: boolean
    studentType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CourseOfferings?: boolean | Course$CourseOfferingsArgs<ExtArgs>
    ScheduleAssignment?: boolean | Course$ScheduleAssignmentArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    department?: boolean
    credits?: boolean
    year?: boolean
    section?: boolean
    batch?: boolean
    studentType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    department?: boolean
    credits?: boolean
    year?: boolean
    section?: boolean
    batch?: boolean
    studentType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    department?: boolean
    credits?: boolean
    year?: boolean
    section?: boolean
    batch?: boolean
    studentType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "department" | "credits" | "year" | "section" | "batch" | "studentType" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CourseOfferings?: boolean | Course$CourseOfferingsArgs<ExtArgs>
    ScheduleAssignment?: boolean | Course$ScheduleAssignmentArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      CourseOfferings: Prisma.$CourseOfferingPayload<ExtArgs>[]
      ScheduleAssignment: Prisma.$ScheduleAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      department: string
      credits: number
      year: number
      section: string
      batch: string
      studentType: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CourseOfferings<T extends Course$CourseOfferingsArgs<ExtArgs> = {}>(args?: Subset<T, Course$CourseOfferingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ScheduleAssignment<T extends Course$ScheduleAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, Course$ScheduleAssignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly code: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly department: FieldRef<"Course", 'String'>
    readonly credits: FieldRef<"Course", 'Int'>
    readonly year: FieldRef<"Course", 'Int'>
    readonly section: FieldRef<"Course", 'String'>
    readonly batch: FieldRef<"Course", 'String'>
    readonly studentType: FieldRef<"Course", 'String'>
    readonly isActive: FieldRef<"Course", 'Boolean'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.CourseOfferings
   */
  export type Course$CourseOfferingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    where?: CourseOfferingWhereInput
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    cursor?: CourseOfferingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * Course.ScheduleAssignment
   */
  export type Course$ScheduleAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    where?: ScheduleAssignmentWhereInput
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    cursor?: ScheduleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseOffering
   */

  export type AggregateCourseOffering = {
    _count: CourseOfferingCountAggregateOutputType | null
    _avg: CourseOfferingAvgAggregateOutputType | null
    _sum: CourseOfferingSumAggregateOutputType | null
    _min: CourseOfferingMinAggregateOutputType | null
    _max: CourseOfferingMaxAggregateOutputType | null
  }

  export type CourseOfferingAvgAggregateOutputType = {
    year: number | null
    totalSections: number | null
    requiredLabSize: number | null
  }

  export type CourseOfferingSumAggregateOutputType = {
    year: number | null
    totalSections: number | null
    requiredLabSize: number | null
  }

  export type CourseOfferingMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    semester: string | null
    year: number | null
    totalSections: number | null
    requiredLabSize: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseOfferingMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    semester: string | null
    year: number | null
    totalSections: number | null
    requiredLabSize: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseOfferingCountAggregateOutputType = {
    id: number
    courseId: number
    semester: number
    year: number
    totalSections: number
    requiredLabSize: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseOfferingAvgAggregateInputType = {
    year?: true
    totalSections?: true
    requiredLabSize?: true
  }

  export type CourseOfferingSumAggregateInputType = {
    year?: true
    totalSections?: true
    requiredLabSize?: true
  }

  export type CourseOfferingMinAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
    totalSections?: true
    requiredLabSize?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseOfferingMaxAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
    totalSections?: true
    requiredLabSize?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseOfferingCountAggregateInputType = {
    id?: true
    courseId?: true
    semester?: true
    year?: true
    totalSections?: true
    requiredLabSize?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseOfferingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseOffering to aggregate.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseOfferings
    **/
    _count?: true | CourseOfferingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseOfferingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseOfferingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseOfferingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseOfferingMaxAggregateInputType
  }

  export type GetCourseOfferingAggregateType<T extends CourseOfferingAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseOffering]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseOffering[P]>
      : GetScalarType<T[P], AggregateCourseOffering[P]>
  }




  export type CourseOfferingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseOfferingWhereInput
    orderBy?: CourseOfferingOrderByWithAggregationInput | CourseOfferingOrderByWithAggregationInput[]
    by: CourseOfferingScalarFieldEnum[] | CourseOfferingScalarFieldEnum
    having?: CourseOfferingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseOfferingCountAggregateInputType | true
    _avg?: CourseOfferingAvgAggregateInputType
    _sum?: CourseOfferingSumAggregateInputType
    _min?: CourseOfferingMinAggregateInputType
    _max?: CourseOfferingMaxAggregateInputType
  }

  export type CourseOfferingGroupByOutputType = {
    id: string
    courseId: string
    semester: string
    year: number
    totalSections: number
    requiredLabSize: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CourseOfferingCountAggregateOutputType | null
    _avg: CourseOfferingAvgAggregateOutputType | null
    _sum: CourseOfferingSumAggregateOutputType | null
    _min: CourseOfferingMinAggregateOutputType | null
    _max: CourseOfferingMaxAggregateOutputType | null
  }

  type GetCourseOfferingGroupByPayload<T extends CourseOfferingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseOfferingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseOfferingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseOfferingGroupByOutputType[P]>
            : GetScalarType<T[P], CourseOfferingGroupByOutputType[P]>
        }
      >
    >


  export type CourseOfferingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    totalSections?: boolean
    requiredLabSize?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    totalSections?: boolean
    requiredLabSize?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    totalSections?: boolean
    requiredLabSize?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectScalar = {
    id?: boolean
    courseId?: boolean
    semester?: boolean
    year?: boolean
    totalSections?: boolean
    requiredLabSize?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOfferingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "semester" | "year" | "totalSections" | "requiredLabSize" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["courseOffering"]>
  export type CourseOfferingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseOfferingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseOfferingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseOfferingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseOffering"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      semester: string
      year: number
      totalSections: number
      requiredLabSize: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseOffering"]>
    composites: {}
  }

  type CourseOfferingGetPayload<S extends boolean | null | undefined | CourseOfferingDefaultArgs> = $Result.GetResult<Prisma.$CourseOfferingPayload, S>

  type CourseOfferingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseOfferingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseOfferingCountAggregateInputType | true
    }

  export interface CourseOfferingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseOffering'], meta: { name: 'CourseOffering' } }
    /**
     * Find zero or one CourseOffering that matches the filter.
     * @param {CourseOfferingFindUniqueArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseOfferingFindUniqueArgs>(args: SelectSubset<T, CourseOfferingFindUniqueArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseOffering that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseOfferingFindUniqueOrThrowArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseOfferingFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseOfferingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseOffering that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindFirstArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseOfferingFindFirstArgs>(args?: SelectSubset<T, CourseOfferingFindFirstArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseOffering that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindFirstOrThrowArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseOfferingFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseOfferingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseOfferings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseOfferings
     * const courseOfferings = await prisma.courseOffering.findMany()
     * 
     * // Get first 10 CourseOfferings
     * const courseOfferings = await prisma.courseOffering.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseOfferingFindManyArgs>(args?: SelectSubset<T, CourseOfferingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseOffering.
     * @param {CourseOfferingCreateArgs} args - Arguments to create a CourseOffering.
     * @example
     * // Create one CourseOffering
     * const CourseOffering = await prisma.courseOffering.create({
     *   data: {
     *     // ... data to create a CourseOffering
     *   }
     * })
     * 
     */
    create<T extends CourseOfferingCreateArgs>(args: SelectSubset<T, CourseOfferingCreateArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseOfferings.
     * @param {CourseOfferingCreateManyArgs} args - Arguments to create many CourseOfferings.
     * @example
     * // Create many CourseOfferings
     * const courseOffering = await prisma.courseOffering.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseOfferingCreateManyArgs>(args?: SelectSubset<T, CourseOfferingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseOfferings and returns the data saved in the database.
     * @param {CourseOfferingCreateManyAndReturnArgs} args - Arguments to create many CourseOfferings.
     * @example
     * // Create many CourseOfferings
     * const courseOffering = await prisma.courseOffering.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseOfferings and only return the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseOfferingCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseOfferingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseOffering.
     * @param {CourseOfferingDeleteArgs} args - Arguments to delete one CourseOffering.
     * @example
     * // Delete one CourseOffering
     * const CourseOffering = await prisma.courseOffering.delete({
     *   where: {
     *     // ... filter to delete one CourseOffering
     *   }
     * })
     * 
     */
    delete<T extends CourseOfferingDeleteArgs>(args: SelectSubset<T, CourseOfferingDeleteArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseOffering.
     * @param {CourseOfferingUpdateArgs} args - Arguments to update one CourseOffering.
     * @example
     * // Update one CourseOffering
     * const courseOffering = await prisma.courseOffering.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseOfferingUpdateArgs>(args: SelectSubset<T, CourseOfferingUpdateArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseOfferings.
     * @param {CourseOfferingDeleteManyArgs} args - Arguments to filter CourseOfferings to delete.
     * @example
     * // Delete a few CourseOfferings
     * const { count } = await prisma.courseOffering.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseOfferingDeleteManyArgs>(args?: SelectSubset<T, CourseOfferingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseOfferings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseOfferings
     * const courseOffering = await prisma.courseOffering.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseOfferingUpdateManyArgs>(args: SelectSubset<T, CourseOfferingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseOfferings and returns the data updated in the database.
     * @param {CourseOfferingUpdateManyAndReturnArgs} args - Arguments to update many CourseOfferings.
     * @example
     * // Update many CourseOfferings
     * const courseOffering = await prisma.courseOffering.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseOfferings and only return the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseOfferingUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseOfferingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseOffering.
     * @param {CourseOfferingUpsertArgs} args - Arguments to update or create a CourseOffering.
     * @example
     * // Update or create a CourseOffering
     * const courseOffering = await prisma.courseOffering.upsert({
     *   create: {
     *     // ... data to create a CourseOffering
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseOffering we want to update
     *   }
     * })
     */
    upsert<T extends CourseOfferingUpsertArgs>(args: SelectSubset<T, CourseOfferingUpsertArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseOfferings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingCountArgs} args - Arguments to filter CourseOfferings to count.
     * @example
     * // Count the number of CourseOfferings
     * const count = await prisma.courseOffering.count({
     *   where: {
     *     // ... the filter for the CourseOfferings we want to count
     *   }
     * })
    **/
    count<T extends CourseOfferingCountArgs>(
      args?: Subset<T, CourseOfferingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseOfferingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseOffering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseOfferingAggregateArgs>(args: Subset<T, CourseOfferingAggregateArgs>): Prisma.PrismaPromise<GetCourseOfferingAggregateType<T>>

    /**
     * Group by CourseOffering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingGroupByArgs} args - Group by arguments.
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
      T extends CourseOfferingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseOfferingGroupByArgs['orderBy'] }
        : { orderBy?: CourseOfferingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseOfferingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseOfferingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseOffering model
   */
  readonly fields: CourseOfferingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseOffering.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseOfferingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseOffering model
   */
  interface CourseOfferingFieldRefs {
    readonly id: FieldRef<"CourseOffering", 'String'>
    readonly courseId: FieldRef<"CourseOffering", 'String'>
    readonly semester: FieldRef<"CourseOffering", 'String'>
    readonly year: FieldRef<"CourseOffering", 'Int'>
    readonly totalSections: FieldRef<"CourseOffering", 'Int'>
    readonly requiredLabSize: FieldRef<"CourseOffering", 'Int'>
    readonly isActive: FieldRef<"CourseOffering", 'Boolean'>
    readonly createdAt: FieldRef<"CourseOffering", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseOffering", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseOffering findUnique
   */
  export type CourseOfferingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering findUniqueOrThrow
   */
  export type CourseOfferingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering findFirst
   */
  export type CourseOfferingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseOfferings.
     */
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering findFirstOrThrow
   */
  export type CourseOfferingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseOfferings.
     */
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering findMany
   */
  export type CourseOfferingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOfferings to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering create
   */
  export type CourseOfferingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseOffering.
     */
    data: XOR<CourseOfferingCreateInput, CourseOfferingUncheckedCreateInput>
  }

  /**
   * CourseOffering createMany
   */
  export type CourseOfferingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseOfferings.
     */
    data: CourseOfferingCreateManyInput | CourseOfferingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseOffering createManyAndReturn
   */
  export type CourseOfferingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * The data used to create many CourseOfferings.
     */
    data: CourseOfferingCreateManyInput | CourseOfferingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseOffering update
   */
  export type CourseOfferingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseOffering.
     */
    data: XOR<CourseOfferingUpdateInput, CourseOfferingUncheckedUpdateInput>
    /**
     * Choose, which CourseOffering to update.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering updateMany
   */
  export type CourseOfferingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseOfferings.
     */
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyInput>
    /**
     * Filter which CourseOfferings to update
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to update.
     */
    limit?: number
  }

  /**
   * CourseOffering updateManyAndReturn
   */
  export type CourseOfferingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * The data used to update CourseOfferings.
     */
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyInput>
    /**
     * Filter which CourseOfferings to update
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseOffering upsert
   */
  export type CourseOfferingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseOffering to update in case it exists.
     */
    where: CourseOfferingWhereUniqueInput
    /**
     * In case the CourseOffering found by the `where` argument doesn't exist, create a new CourseOffering with this data.
     */
    create: XOR<CourseOfferingCreateInput, CourseOfferingUncheckedCreateInput>
    /**
     * In case the CourseOffering was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseOfferingUpdateInput, CourseOfferingUncheckedUpdateInput>
  }

  /**
   * CourseOffering delete
   */
  export type CourseOfferingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter which CourseOffering to delete.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering deleteMany
   */
  export type CourseOfferingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseOfferings to delete
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to delete.
     */
    limit?: number
  }

  /**
   * CourseOffering without action
   */
  export type CourseOfferingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    year: number | null
    capacity: number | null
  }

  export type SectionSumAggregateOutputType = {
    year: number | null
    capacity: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    year: number | null
    department: string | null
    capacity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    year: number | null
    department: string | null
    capacity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    name: number
    year: number
    department: number
    capacity: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    year?: true
    capacity?: true
  }

  export type SectionSumAggregateInputType = {
    year?: true
    capacity?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    name?: true
    year?: true
    department?: true
    capacity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    name?: true
    year?: true
    department?: true
    capacity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    name?: true
    year?: true
    department?: true
    capacity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    name: string
    year: number
    department: string
    capacity: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    department?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Groups?: boolean | Section$GroupsArgs<ExtArgs>
    ScheduleAssignment?: boolean | Section$ScheduleAssignmentArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    department?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    department?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    name?: boolean
    year?: boolean
    department?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "year" | "department" | "capacity" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Groups?: boolean | Section$GroupsArgs<ExtArgs>
    ScheduleAssignment?: boolean | Section$ScheduleAssignmentArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      Groups: Prisma.$GroupPayload<ExtArgs>[]
      ScheduleAssignment: Prisma.$ScheduleAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      year: number
      department: string
      capacity: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Groups<T extends Section$GroupsArgs<ExtArgs> = {}>(args?: Subset<T, Section$GroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ScheduleAssignment<T extends Section$ScheduleAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, Section$ScheduleAssignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly name: FieldRef<"Section", 'String'>
    readonly year: FieldRef<"Section", 'Int'>
    readonly department: FieldRef<"Section", 'String'>
    readonly capacity: FieldRef<"Section", 'Int'>
    readonly isActive: FieldRef<"Section", 'Boolean'>
    readonly createdAt: FieldRef<"Section", 'DateTime'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.Groups
   */
  export type Section$GroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Section.ScheduleAssignment
   */
  export type Section$ScheduleAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    where?: ScheduleAssignmentWhereInput
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    cursor?: ScheduleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    capacity: number | null
  }

  export type GroupSumAggregateOutputType = {
    capacity: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    sectionId: string | null
    capacity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sectionId: string | null
    capacity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    sectionId: number
    capacity: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    capacity?: true
  }

  export type GroupSumAggregateInputType = {
    capacity?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    sectionId?: true
    capacity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    sectionId?: true
    capacity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    sectionId?: true
    capacity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    sectionId: string
    capacity: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectionId?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    ScheduleAssignment?: boolean | Group$ScheduleAssignmentArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectionId?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectionId?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    sectionId?: boolean
    capacity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sectionId" | "capacity" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    ScheduleAssignment?: boolean | Group$ScheduleAssignmentArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
      ScheduleAssignment: Prisma.$ScheduleAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sectionId: string
      capacity: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ScheduleAssignment<T extends Group$ScheduleAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, Group$ScheduleAssignmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly sectionId: FieldRef<"Group", 'String'>
    readonly capacity: FieldRef<"Group", 'Int'>
    readonly isActive: FieldRef<"Group", 'Boolean'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.ScheduleAssignment
   */
  export type Group$ScheduleAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    where?: ScheduleAssignmentWhereInput
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    cursor?: ScheduleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model LabAssistant
   */

  export type AggregateLabAssistant = {
    _count: LabAssistantCountAggregateOutputType | null
    _min: LabAssistantMinAggregateOutputType | null
    _max: LabAssistantMaxAggregateOutputType | null
  }

  export type LabAssistantMinAggregateOutputType = {
    id: string | null
    labAssistantId: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    department: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabAssistantMaxAggregateOutputType = {
    id: string | null
    labAssistantId: string | null
    username: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    department: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LabAssistantCountAggregateOutputType = {
    id: number
    labAssistantId: number
    username: number
    firstName: number
    lastName: number
    email: number
    password: number
    department: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LabAssistantMinAggregateInputType = {
    id?: true
    labAssistantId?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    department?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabAssistantMaxAggregateInputType = {
    id?: true
    labAssistantId?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    department?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LabAssistantCountAggregateInputType = {
    id?: true
    labAssistantId?: true
    username?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    department?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LabAssistantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabAssistant to aggregate.
     */
    where?: LabAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabAssistants to fetch.
     */
    orderBy?: LabAssistantOrderByWithRelationInput | LabAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LabAssistants
    **/
    _count?: true | LabAssistantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabAssistantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabAssistantMaxAggregateInputType
  }

  export type GetLabAssistantAggregateType<T extends LabAssistantAggregateArgs> = {
        [P in keyof T & keyof AggregateLabAssistant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabAssistant[P]>
      : GetScalarType<T[P], AggregateLabAssistant[P]>
  }




  export type LabAssistantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabAssistantWhereInput
    orderBy?: LabAssistantOrderByWithAggregationInput | LabAssistantOrderByWithAggregationInput[]
    by: LabAssistantScalarFieldEnum[] | LabAssistantScalarFieldEnum
    having?: LabAssistantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabAssistantCountAggregateInputType | true
    _min?: LabAssistantMinAggregateInputType
    _max?: LabAssistantMaxAggregateInputType
  }

  export type LabAssistantGroupByOutputType = {
    id: string
    labAssistantId: string
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    department: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: LabAssistantCountAggregateOutputType | null
    _min: LabAssistantMinAggregateOutputType | null
    _max: LabAssistantMaxAggregateOutputType | null
  }

  type GetLabAssistantGroupByPayload<T extends LabAssistantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabAssistantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabAssistantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabAssistantGroupByOutputType[P]>
            : GetScalarType<T[P], LabAssistantGroupByOutputType[P]>
        }
      >
    >


  export type LabAssistantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labAssistantId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ScheduleAssignments?: boolean | LabAssistant$ScheduleAssignmentsArgs<ExtArgs>
    user?: boolean | LabAssistant$userArgs<ExtArgs>
    _count?: boolean | LabAssistantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["labAssistant"]>

  export type LabAssistantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labAssistantId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["labAssistant"]>

  export type LabAssistantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    labAssistantId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["labAssistant"]>

  export type LabAssistantSelectScalar = {
    id?: boolean
    labAssistantId?: boolean
    username?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    department?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LabAssistantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "labAssistantId" | "username" | "firstName" | "lastName" | "email" | "password" | "department" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["labAssistant"]>
  export type LabAssistantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScheduleAssignments?: boolean | LabAssistant$ScheduleAssignmentsArgs<ExtArgs>
    user?: boolean | LabAssistant$userArgs<ExtArgs>
    _count?: boolean | LabAssistantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabAssistantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LabAssistantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LabAssistantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LabAssistant"
    objects: {
      ScheduleAssignments: Prisma.$ScheduleAssignmentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      labAssistantId: string
      username: string
      firstName: string
      lastName: string
      email: string
      password: string
      department: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["labAssistant"]>
    composites: {}
  }

  type LabAssistantGetPayload<S extends boolean | null | undefined | LabAssistantDefaultArgs> = $Result.GetResult<Prisma.$LabAssistantPayload, S>

  type LabAssistantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabAssistantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabAssistantCountAggregateInputType | true
    }

  export interface LabAssistantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LabAssistant'], meta: { name: 'LabAssistant' } }
    /**
     * Find zero or one LabAssistant that matches the filter.
     * @param {LabAssistantFindUniqueArgs} args - Arguments to find a LabAssistant
     * @example
     * // Get one LabAssistant
     * const labAssistant = await prisma.labAssistant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabAssistantFindUniqueArgs>(args: SelectSubset<T, LabAssistantFindUniqueArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LabAssistant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabAssistantFindUniqueOrThrowArgs} args - Arguments to find a LabAssistant
     * @example
     * // Get one LabAssistant
     * const labAssistant = await prisma.labAssistant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabAssistantFindUniqueOrThrowArgs>(args: SelectSubset<T, LabAssistantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabAssistant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantFindFirstArgs} args - Arguments to find a LabAssistant
     * @example
     * // Get one LabAssistant
     * const labAssistant = await prisma.labAssistant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabAssistantFindFirstArgs>(args?: SelectSubset<T, LabAssistantFindFirstArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LabAssistant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantFindFirstOrThrowArgs} args - Arguments to find a LabAssistant
     * @example
     * // Get one LabAssistant
     * const labAssistant = await prisma.labAssistant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabAssistantFindFirstOrThrowArgs>(args?: SelectSubset<T, LabAssistantFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LabAssistants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LabAssistants
     * const labAssistants = await prisma.labAssistant.findMany()
     * 
     * // Get first 10 LabAssistants
     * const labAssistants = await prisma.labAssistant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labAssistantWithIdOnly = await prisma.labAssistant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabAssistantFindManyArgs>(args?: SelectSubset<T, LabAssistantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LabAssistant.
     * @param {LabAssistantCreateArgs} args - Arguments to create a LabAssistant.
     * @example
     * // Create one LabAssistant
     * const LabAssistant = await prisma.labAssistant.create({
     *   data: {
     *     // ... data to create a LabAssistant
     *   }
     * })
     * 
     */
    create<T extends LabAssistantCreateArgs>(args: SelectSubset<T, LabAssistantCreateArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LabAssistants.
     * @param {LabAssistantCreateManyArgs} args - Arguments to create many LabAssistants.
     * @example
     * // Create many LabAssistants
     * const labAssistant = await prisma.labAssistant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabAssistantCreateManyArgs>(args?: SelectSubset<T, LabAssistantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LabAssistants and returns the data saved in the database.
     * @param {LabAssistantCreateManyAndReturnArgs} args - Arguments to create many LabAssistants.
     * @example
     * // Create many LabAssistants
     * const labAssistant = await prisma.labAssistant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LabAssistants and only return the `id`
     * const labAssistantWithIdOnly = await prisma.labAssistant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabAssistantCreateManyAndReturnArgs>(args?: SelectSubset<T, LabAssistantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LabAssistant.
     * @param {LabAssistantDeleteArgs} args - Arguments to delete one LabAssistant.
     * @example
     * // Delete one LabAssistant
     * const LabAssistant = await prisma.labAssistant.delete({
     *   where: {
     *     // ... filter to delete one LabAssistant
     *   }
     * })
     * 
     */
    delete<T extends LabAssistantDeleteArgs>(args: SelectSubset<T, LabAssistantDeleteArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LabAssistant.
     * @param {LabAssistantUpdateArgs} args - Arguments to update one LabAssistant.
     * @example
     * // Update one LabAssistant
     * const labAssistant = await prisma.labAssistant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabAssistantUpdateArgs>(args: SelectSubset<T, LabAssistantUpdateArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LabAssistants.
     * @param {LabAssistantDeleteManyArgs} args - Arguments to filter LabAssistants to delete.
     * @example
     * // Delete a few LabAssistants
     * const { count } = await prisma.labAssistant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabAssistantDeleteManyArgs>(args?: SelectSubset<T, LabAssistantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabAssistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LabAssistants
     * const labAssistant = await prisma.labAssistant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabAssistantUpdateManyArgs>(args: SelectSubset<T, LabAssistantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LabAssistants and returns the data updated in the database.
     * @param {LabAssistantUpdateManyAndReturnArgs} args - Arguments to update many LabAssistants.
     * @example
     * // Update many LabAssistants
     * const labAssistant = await prisma.labAssistant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LabAssistants and only return the `id`
     * const labAssistantWithIdOnly = await prisma.labAssistant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LabAssistantUpdateManyAndReturnArgs>(args: SelectSubset<T, LabAssistantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LabAssistant.
     * @param {LabAssistantUpsertArgs} args - Arguments to update or create a LabAssistant.
     * @example
     * // Update or create a LabAssistant
     * const labAssistant = await prisma.labAssistant.upsert({
     *   create: {
     *     // ... data to create a LabAssistant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LabAssistant we want to update
     *   }
     * })
     */
    upsert<T extends LabAssistantUpsertArgs>(args: SelectSubset<T, LabAssistantUpsertArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LabAssistants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantCountArgs} args - Arguments to filter LabAssistants to count.
     * @example
     * // Count the number of LabAssistants
     * const count = await prisma.labAssistant.count({
     *   where: {
     *     // ... the filter for the LabAssistants we want to count
     *   }
     * })
    **/
    count<T extends LabAssistantCountArgs>(
      args?: Subset<T, LabAssistantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabAssistantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LabAssistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabAssistantAggregateArgs>(args: Subset<T, LabAssistantAggregateArgs>): Prisma.PrismaPromise<GetLabAssistantAggregateType<T>>

    /**
     * Group by LabAssistant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAssistantGroupByArgs} args - Group by arguments.
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
      T extends LabAssistantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabAssistantGroupByArgs['orderBy'] }
        : { orderBy?: LabAssistantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabAssistantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabAssistantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LabAssistant model
   */
  readonly fields: LabAssistantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LabAssistant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabAssistantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ScheduleAssignments<T extends LabAssistant$ScheduleAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, LabAssistant$ScheduleAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends LabAssistant$userArgs<ExtArgs> = {}>(args?: Subset<T, LabAssistant$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LabAssistant model
   */
  interface LabAssistantFieldRefs {
    readonly id: FieldRef<"LabAssistant", 'String'>
    readonly labAssistantId: FieldRef<"LabAssistant", 'String'>
    readonly username: FieldRef<"LabAssistant", 'String'>
    readonly firstName: FieldRef<"LabAssistant", 'String'>
    readonly lastName: FieldRef<"LabAssistant", 'String'>
    readonly email: FieldRef<"LabAssistant", 'String'>
    readonly password: FieldRef<"LabAssistant", 'String'>
    readonly department: FieldRef<"LabAssistant", 'String'>
    readonly isActive: FieldRef<"LabAssistant", 'Boolean'>
    readonly createdAt: FieldRef<"LabAssistant", 'DateTime'>
    readonly updatedAt: FieldRef<"LabAssistant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LabAssistant findUnique
   */
  export type LabAssistantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter, which LabAssistant to fetch.
     */
    where: LabAssistantWhereUniqueInput
  }

  /**
   * LabAssistant findUniqueOrThrow
   */
  export type LabAssistantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter, which LabAssistant to fetch.
     */
    where: LabAssistantWhereUniqueInput
  }

  /**
   * LabAssistant findFirst
   */
  export type LabAssistantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter, which LabAssistant to fetch.
     */
    where?: LabAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabAssistants to fetch.
     */
    orderBy?: LabAssistantOrderByWithRelationInput | LabAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabAssistants.
     */
    cursor?: LabAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabAssistants.
     */
    distinct?: LabAssistantScalarFieldEnum | LabAssistantScalarFieldEnum[]
  }

  /**
   * LabAssistant findFirstOrThrow
   */
  export type LabAssistantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter, which LabAssistant to fetch.
     */
    where?: LabAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabAssistants to fetch.
     */
    orderBy?: LabAssistantOrderByWithRelationInput | LabAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LabAssistants.
     */
    cursor?: LabAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabAssistants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LabAssistants.
     */
    distinct?: LabAssistantScalarFieldEnum | LabAssistantScalarFieldEnum[]
  }

  /**
   * LabAssistant findMany
   */
  export type LabAssistantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter, which LabAssistants to fetch.
     */
    where?: LabAssistantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LabAssistants to fetch.
     */
    orderBy?: LabAssistantOrderByWithRelationInput | LabAssistantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LabAssistants.
     */
    cursor?: LabAssistantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LabAssistants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LabAssistants.
     */
    skip?: number
    distinct?: LabAssistantScalarFieldEnum | LabAssistantScalarFieldEnum[]
  }

  /**
   * LabAssistant create
   */
  export type LabAssistantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * The data needed to create a LabAssistant.
     */
    data: XOR<LabAssistantCreateInput, LabAssistantUncheckedCreateInput>
  }

  /**
   * LabAssistant createMany
   */
  export type LabAssistantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LabAssistants.
     */
    data: LabAssistantCreateManyInput | LabAssistantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabAssistant createManyAndReturn
   */
  export type LabAssistantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * The data used to create many LabAssistants.
     */
    data: LabAssistantCreateManyInput | LabAssistantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LabAssistant update
   */
  export type LabAssistantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * The data needed to update a LabAssistant.
     */
    data: XOR<LabAssistantUpdateInput, LabAssistantUncheckedUpdateInput>
    /**
     * Choose, which LabAssistant to update.
     */
    where: LabAssistantWhereUniqueInput
  }

  /**
   * LabAssistant updateMany
   */
  export type LabAssistantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LabAssistants.
     */
    data: XOR<LabAssistantUpdateManyMutationInput, LabAssistantUncheckedUpdateManyInput>
    /**
     * Filter which LabAssistants to update
     */
    where?: LabAssistantWhereInput
    /**
     * Limit how many LabAssistants to update.
     */
    limit?: number
  }

  /**
   * LabAssistant updateManyAndReturn
   */
  export type LabAssistantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * The data used to update LabAssistants.
     */
    data: XOR<LabAssistantUpdateManyMutationInput, LabAssistantUncheckedUpdateManyInput>
    /**
     * Filter which LabAssistants to update
     */
    where?: LabAssistantWhereInput
    /**
     * Limit how many LabAssistants to update.
     */
    limit?: number
  }

  /**
   * LabAssistant upsert
   */
  export type LabAssistantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * The filter to search for the LabAssistant to update in case it exists.
     */
    where: LabAssistantWhereUniqueInput
    /**
     * In case the LabAssistant found by the `where` argument doesn't exist, create a new LabAssistant with this data.
     */
    create: XOR<LabAssistantCreateInput, LabAssistantUncheckedCreateInput>
    /**
     * In case the LabAssistant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabAssistantUpdateInput, LabAssistantUncheckedUpdateInput>
  }

  /**
   * LabAssistant delete
   */
  export type LabAssistantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    /**
     * Filter which LabAssistant to delete.
     */
    where: LabAssistantWhereUniqueInput
  }

  /**
   * LabAssistant deleteMany
   */
  export type LabAssistantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LabAssistants to delete
     */
    where?: LabAssistantWhereInput
    /**
     * Limit how many LabAssistants to delete.
     */
    limit?: number
  }

  /**
   * LabAssistant.ScheduleAssignments
   */
  export type LabAssistant$ScheduleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    where?: ScheduleAssignmentWhereInput
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    cursor?: ScheduleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * LabAssistant.user
   */
  export type LabAssistant$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LabAssistant without action
   */
  export type LabAssistantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
  }


  /**
   * Model TimeSlot
   */

  export type AggregateTimeSlot = {
    _count: TimeSlotCountAggregateOutputType | null
    _min: TimeSlotMinAggregateOutputType | null
    _max: TimeSlotMaxAggregateOutputType | null
  }

  export type TimeSlotMinAggregateOutputType = {
    id: string | null
    dayOfWeek: string | null
    startTime: string | null
    endTime: string | null
    slotType: $Enums.SlotType | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeSlotMaxAggregateOutputType = {
    id: string | null
    dayOfWeek: string | null
    startTime: string | null
    endTime: string | null
    slotType: $Enums.SlotType | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TimeSlotCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    startTime: number
    endTime: number
    slotType: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TimeSlotMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    slotType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeSlotMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    slotType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TimeSlotCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    slotType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TimeSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlot to aggregate.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeSlots
    **/
    _count?: true | TimeSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeSlotMaxAggregateInputType
  }

  export type GetTimeSlotAggregateType<T extends TimeSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeSlot[P]>
      : GetScalarType<T[P], AggregateTimeSlot[P]>
  }




  export type TimeSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeSlotWhereInput
    orderBy?: TimeSlotOrderByWithAggregationInput | TimeSlotOrderByWithAggregationInput[]
    by: TimeSlotScalarFieldEnum[] | TimeSlotScalarFieldEnum
    having?: TimeSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeSlotCountAggregateInputType | true
    _min?: TimeSlotMinAggregateInputType
    _max?: TimeSlotMaxAggregateInputType
  }

  export type TimeSlotGroupByOutputType = {
    id: string
    dayOfWeek: string
    startTime: string
    endTime: string
    slotType: $Enums.SlotType
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TimeSlotCountAggregateOutputType | null
    _min: TimeSlotMinAggregateOutputType | null
    _max: TimeSlotMaxAggregateOutputType | null
  }

  type GetTimeSlotGroupByPayload<T extends TimeSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeSlotGroupByOutputType[P]>
            : GetScalarType<T[P], TimeSlotGroupByOutputType[P]>
        }
      >
    >


  export type TimeSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    slotType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ScheduleAssignments?: boolean | TimeSlot$ScheduleAssignmentsArgs<ExtArgs>
    _count?: boolean | TimeSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlot"]>

  export type TimeSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    slotType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["timeSlot"]>

  export type TimeSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    slotType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["timeSlot"]>

  export type TimeSlotSelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    slotType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TimeSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayOfWeek" | "startTime" | "endTime" | "slotType" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["timeSlot"]>
  export type TimeSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ScheduleAssignments?: boolean | TimeSlot$ScheduleAssignmentsArgs<ExtArgs>
    _count?: boolean | TimeSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimeSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TimeSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TimeSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeSlot"
    objects: {
      ScheduleAssignments: Prisma.$ScheduleAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayOfWeek: string
      startTime: string
      endTime: string
      slotType: $Enums.SlotType
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["timeSlot"]>
    composites: {}
  }

  type TimeSlotGetPayload<S extends boolean | null | undefined | TimeSlotDefaultArgs> = $Result.GetResult<Prisma.$TimeSlotPayload, S>

  type TimeSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeSlotCountAggregateInputType | true
    }

  export interface TimeSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeSlot'], meta: { name: 'TimeSlot' } }
    /**
     * Find zero or one TimeSlot that matches the filter.
     * @param {TimeSlotFindUniqueArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeSlotFindUniqueArgs>(args: SelectSubset<T, TimeSlotFindUniqueArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeSlotFindUniqueOrThrowArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindFirstArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeSlotFindFirstArgs>(args?: SelectSubset<T, TimeSlotFindFirstArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindFirstOrThrowArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeSlots
     * const timeSlots = await prisma.timeSlot.findMany()
     * 
     * // Get first 10 TimeSlots
     * const timeSlots = await prisma.timeSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeSlotWithIdOnly = await prisma.timeSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeSlotFindManyArgs>(args?: SelectSubset<T, TimeSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeSlot.
     * @param {TimeSlotCreateArgs} args - Arguments to create a TimeSlot.
     * @example
     * // Create one TimeSlot
     * const TimeSlot = await prisma.timeSlot.create({
     *   data: {
     *     // ... data to create a TimeSlot
     *   }
     * })
     * 
     */
    create<T extends TimeSlotCreateArgs>(args: SelectSubset<T, TimeSlotCreateArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeSlots.
     * @param {TimeSlotCreateManyArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlot = await prisma.timeSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeSlotCreateManyArgs>(args?: SelectSubset<T, TimeSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeSlots and returns the data saved in the database.
     * @param {TimeSlotCreateManyAndReturnArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlot = await prisma.timeSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeSlots and only return the `id`
     * const timeSlotWithIdOnly = await prisma.timeSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeSlot.
     * @param {TimeSlotDeleteArgs} args - Arguments to delete one TimeSlot.
     * @example
     * // Delete one TimeSlot
     * const TimeSlot = await prisma.timeSlot.delete({
     *   where: {
     *     // ... filter to delete one TimeSlot
     *   }
     * })
     * 
     */
    delete<T extends TimeSlotDeleteArgs>(args: SelectSubset<T, TimeSlotDeleteArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeSlot.
     * @param {TimeSlotUpdateArgs} args - Arguments to update one TimeSlot.
     * @example
     * // Update one TimeSlot
     * const timeSlot = await prisma.timeSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeSlotUpdateArgs>(args: SelectSubset<T, TimeSlotUpdateArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeSlots.
     * @param {TimeSlotDeleteManyArgs} args - Arguments to filter TimeSlots to delete.
     * @example
     * // Delete a few TimeSlots
     * const { count } = await prisma.timeSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeSlotDeleteManyArgs>(args?: SelectSubset<T, TimeSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeSlots
     * const timeSlot = await prisma.timeSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeSlotUpdateManyArgs>(args: SelectSubset<T, TimeSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSlots and returns the data updated in the database.
     * @param {TimeSlotUpdateManyAndReturnArgs} args - Arguments to update many TimeSlots.
     * @example
     * // Update many TimeSlots
     * const timeSlot = await prisma.timeSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeSlots and only return the `id`
     * const timeSlotWithIdOnly = await prisma.timeSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeSlot.
     * @param {TimeSlotUpsertArgs} args - Arguments to update or create a TimeSlot.
     * @example
     * // Update or create a TimeSlot
     * const timeSlot = await prisma.timeSlot.upsert({
     *   create: {
     *     // ... data to create a TimeSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeSlot we want to update
     *   }
     * })
     */
    upsert<T extends TimeSlotUpsertArgs>(args: SelectSubset<T, TimeSlotUpsertArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotCountArgs} args - Arguments to filter TimeSlots to count.
     * @example
     * // Count the number of TimeSlots
     * const count = await prisma.timeSlot.count({
     *   where: {
     *     // ... the filter for the TimeSlots we want to count
     *   }
     * })
    **/
    count<T extends TimeSlotCountArgs>(
      args?: Subset<T, TimeSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeSlotAggregateArgs>(args: Subset<T, TimeSlotAggregateArgs>): Prisma.PrismaPromise<GetTimeSlotAggregateType<T>>

    /**
     * Group by TimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotGroupByArgs} args - Group by arguments.
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
      T extends TimeSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeSlotGroupByArgs['orderBy'] }
        : { orderBy?: TimeSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeSlot model
   */
  readonly fields: TimeSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ScheduleAssignments<T extends TimeSlot$ScheduleAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, TimeSlot$ScheduleAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeSlot model
   */
  interface TimeSlotFieldRefs {
    readonly id: FieldRef<"TimeSlot", 'String'>
    readonly dayOfWeek: FieldRef<"TimeSlot", 'String'>
    readonly startTime: FieldRef<"TimeSlot", 'String'>
    readonly endTime: FieldRef<"TimeSlot", 'String'>
    readonly slotType: FieldRef<"TimeSlot", 'SlotType'>
    readonly isActive: FieldRef<"TimeSlot", 'Boolean'>
    readonly createdAt: FieldRef<"TimeSlot", 'DateTime'>
    readonly updatedAt: FieldRef<"TimeSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimeSlot findUnique
   */
  export type TimeSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot findUniqueOrThrow
   */
  export type TimeSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot findFirst
   */
  export type TimeSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot findFirstOrThrow
   */
  export type TimeSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot findMany
   */
  export type TimeSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot create
   */
  export type TimeSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeSlot.
     */
    data: XOR<TimeSlotCreateInput, TimeSlotUncheckedCreateInput>
  }

  /**
   * TimeSlot createMany
   */
  export type TimeSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotCreateManyInput | TimeSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeSlot createManyAndReturn
   */
  export type TimeSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotCreateManyInput | TimeSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeSlot update
   */
  export type TimeSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeSlot.
     */
    data: XOR<TimeSlotUpdateInput, TimeSlotUncheckedUpdateInput>
    /**
     * Choose, which TimeSlot to update.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot updateMany
   */
  export type TimeSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeSlots.
     */
    data: XOR<TimeSlotUpdateManyMutationInput, TimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which TimeSlots to update
     */
    where?: TimeSlotWhereInput
    /**
     * Limit how many TimeSlots to update.
     */
    limit?: number
  }

  /**
   * TimeSlot updateManyAndReturn
   */
  export type TimeSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * The data used to update TimeSlots.
     */
    data: XOR<TimeSlotUpdateManyMutationInput, TimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which TimeSlots to update
     */
    where?: TimeSlotWhereInput
    /**
     * Limit how many TimeSlots to update.
     */
    limit?: number
  }

  /**
   * TimeSlot upsert
   */
  export type TimeSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeSlot to update in case it exists.
     */
    where: TimeSlotWhereUniqueInput
    /**
     * In case the TimeSlot found by the `where` argument doesn't exist, create a new TimeSlot with this data.
     */
    create: XOR<TimeSlotCreateInput, TimeSlotUncheckedCreateInput>
    /**
     * In case the TimeSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeSlotUpdateInput, TimeSlotUncheckedUpdateInput>
  }

  /**
   * TimeSlot delete
   */
  export type TimeSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter which TimeSlot to delete.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot deleteMany
   */
  export type TimeSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlots to delete
     */
    where?: TimeSlotWhereInput
    /**
     * Limit how many TimeSlots to delete.
     */
    limit?: number
  }

  /**
   * TimeSlot.ScheduleAssignments
   */
  export type TimeSlot$ScheduleAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    where?: ScheduleAssignmentWhereInput
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    cursor?: ScheduleAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * TimeSlot without action
   */
  export type TimeSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
  }


  /**
   * Model ScheduleAssignment
   */

  export type AggregateScheduleAssignment = {
    _count: ScheduleAssignmentCountAggregateOutputType | null
    _min: ScheduleAssignmentMinAggregateOutputType | null
    _max: ScheduleAssignmentMaxAggregateOutputType | null
  }

  export type ScheduleAssignmentMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    sectionId: string | null
    groupId: string | null
    labRoomId: string | null
    labAssistantId: string | null
    timeSlotId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleAssignmentMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    sectionId: string | null
    groupId: string | null
    labRoomId: string | null
    labAssistantId: string | null
    timeSlotId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleAssignmentCountAggregateOutputType = {
    id: number
    courseId: number
    sectionId: number
    groupId: number
    labRoomId: number
    labAssistantId: number
    timeSlotId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleAssignmentMinAggregateInputType = {
    id?: true
    courseId?: true
    sectionId?: true
    groupId?: true
    labRoomId?: true
    labAssistantId?: true
    timeSlotId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleAssignmentMaxAggregateInputType = {
    id?: true
    courseId?: true
    sectionId?: true
    groupId?: true
    labRoomId?: true
    labAssistantId?: true
    timeSlotId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleAssignmentCountAggregateInputType = {
    id?: true
    courseId?: true
    sectionId?: true
    groupId?: true
    labRoomId?: true
    labAssistantId?: true
    timeSlotId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleAssignment to aggregate.
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleAssignments to fetch.
     */
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleAssignments
    **/
    _count?: true | ScheduleAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleAssignmentMaxAggregateInputType
  }

  export type GetScheduleAssignmentAggregateType<T extends ScheduleAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleAssignment[P]>
      : GetScalarType<T[P], AggregateScheduleAssignment[P]>
  }




  export type ScheduleAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleAssignmentWhereInput
    orderBy?: ScheduleAssignmentOrderByWithAggregationInput | ScheduleAssignmentOrderByWithAggregationInput[]
    by: ScheduleAssignmentScalarFieldEnum[] | ScheduleAssignmentScalarFieldEnum
    having?: ScheduleAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleAssignmentCountAggregateInputType | true
    _min?: ScheduleAssignmentMinAggregateInputType
    _max?: ScheduleAssignmentMaxAggregateInputType
  }

  export type ScheduleAssignmentGroupByOutputType = {
    id: string
    courseId: string
    sectionId: string
    groupId: string | null
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ScheduleAssignmentCountAggregateOutputType | null
    _min: ScheduleAssignmentMinAggregateOutputType | null
    _max: ScheduleAssignmentMaxAggregateOutputType | null
  }

  type GetScheduleAssignmentGroupByPayload<T extends ScheduleAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    sectionId?: boolean
    groupId?: boolean
    labRoomId?: boolean
    labAssistantId?: boolean
    timeSlotId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    group?: boolean | ScheduleAssignment$groupArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleAssignment"]>

  export type ScheduleAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    sectionId?: boolean
    groupId?: boolean
    labRoomId?: boolean
    labAssistantId?: boolean
    timeSlotId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    group?: boolean | ScheduleAssignment$groupArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleAssignment"]>

  export type ScheduleAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    sectionId?: boolean
    groupId?: boolean
    labRoomId?: boolean
    labAssistantId?: boolean
    timeSlotId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    group?: boolean | ScheduleAssignment$groupArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleAssignment"]>

  export type ScheduleAssignmentSelectScalar = {
    id?: boolean
    courseId?: boolean
    sectionId?: boolean
    groupId?: boolean
    labRoomId?: boolean
    labAssistantId?: boolean
    timeSlotId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "sectionId" | "groupId" | "labRoomId" | "labAssistantId" | "timeSlotId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["scheduleAssignment"]>
  export type ScheduleAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    group?: boolean | ScheduleAssignment$groupArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }
  export type ScheduleAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    group?: boolean | ScheduleAssignment$groupArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }
  export type ScheduleAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    group?: boolean | ScheduleAssignment$groupArgs<ExtArgs>
    labRoom?: boolean | LabRoomDefaultArgs<ExtArgs>
    labAssistant?: boolean | LabAssistantDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }

  export type $ScheduleAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleAssignment"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      section: Prisma.$SectionPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
      labRoom: Prisma.$LabRoomPayload<ExtArgs>
      labAssistant: Prisma.$LabAssistantPayload<ExtArgs>
      timeSlot: Prisma.$TimeSlotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      sectionId: string
      groupId: string | null
      labRoomId: string
      labAssistantId: string
      timeSlotId: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scheduleAssignment"]>
    composites: {}
  }

  type ScheduleAssignmentGetPayload<S extends boolean | null | undefined | ScheduleAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ScheduleAssignmentPayload, S>

  type ScheduleAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleAssignmentCountAggregateInputType | true
    }

  export interface ScheduleAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleAssignment'], meta: { name: 'ScheduleAssignment' } }
    /**
     * Find zero or one ScheduleAssignment that matches the filter.
     * @param {ScheduleAssignmentFindUniqueArgs} args - Arguments to find a ScheduleAssignment
     * @example
     * // Get one ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleAssignmentFindUniqueArgs>(args: SelectSubset<T, ScheduleAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduleAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ScheduleAssignment
     * @example
     * // Get one ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentFindFirstArgs} args - Arguments to find a ScheduleAssignment
     * @example
     * // Get one ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleAssignmentFindFirstArgs>(args?: SelectSubset<T, ScheduleAssignmentFindFirstArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentFindFirstOrThrowArgs} args - Arguments to find a ScheduleAssignment
     * @example
     * // Get one ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduleAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleAssignments
     * const scheduleAssignments = await prisma.scheduleAssignment.findMany()
     * 
     * // Get first 10 ScheduleAssignments
     * const scheduleAssignments = await prisma.scheduleAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleAssignmentWithIdOnly = await prisma.scheduleAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleAssignmentFindManyArgs>(args?: SelectSubset<T, ScheduleAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduleAssignment.
     * @param {ScheduleAssignmentCreateArgs} args - Arguments to create a ScheduleAssignment.
     * @example
     * // Create one ScheduleAssignment
     * const ScheduleAssignment = await prisma.scheduleAssignment.create({
     *   data: {
     *     // ... data to create a ScheduleAssignment
     *   }
     * })
     * 
     */
    create<T extends ScheduleAssignmentCreateArgs>(args: SelectSubset<T, ScheduleAssignmentCreateArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduleAssignments.
     * @param {ScheduleAssignmentCreateManyArgs} args - Arguments to create many ScheduleAssignments.
     * @example
     * // Create many ScheduleAssignments
     * const scheduleAssignment = await prisma.scheduleAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleAssignmentCreateManyArgs>(args?: SelectSubset<T, ScheduleAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleAssignments and returns the data saved in the database.
     * @param {ScheduleAssignmentCreateManyAndReturnArgs} args - Arguments to create many ScheduleAssignments.
     * @example
     * // Create many ScheduleAssignments
     * const scheduleAssignment = await prisma.scheduleAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleAssignments and only return the `id`
     * const scheduleAssignmentWithIdOnly = await prisma.scheduleAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduleAssignment.
     * @param {ScheduleAssignmentDeleteArgs} args - Arguments to delete one ScheduleAssignment.
     * @example
     * // Delete one ScheduleAssignment
     * const ScheduleAssignment = await prisma.scheduleAssignment.delete({
     *   where: {
     *     // ... filter to delete one ScheduleAssignment
     *   }
     * })
     * 
     */
    delete<T extends ScheduleAssignmentDeleteArgs>(args: SelectSubset<T, ScheduleAssignmentDeleteArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduleAssignment.
     * @param {ScheduleAssignmentUpdateArgs} args - Arguments to update one ScheduleAssignment.
     * @example
     * // Update one ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleAssignmentUpdateArgs>(args: SelectSubset<T, ScheduleAssignmentUpdateArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduleAssignments.
     * @param {ScheduleAssignmentDeleteManyArgs} args - Arguments to filter ScheduleAssignments to delete.
     * @example
     * // Delete a few ScheduleAssignments
     * const { count } = await prisma.scheduleAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleAssignmentDeleteManyArgs>(args?: SelectSubset<T, ScheduleAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleAssignments
     * const scheduleAssignment = await prisma.scheduleAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleAssignmentUpdateManyArgs>(args: SelectSubset<T, ScheduleAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleAssignments and returns the data updated in the database.
     * @param {ScheduleAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ScheduleAssignments.
     * @example
     * // Update many ScheduleAssignments
     * const scheduleAssignment = await prisma.scheduleAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduleAssignments and only return the `id`
     * const scheduleAssignmentWithIdOnly = await prisma.scheduleAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduleAssignment.
     * @param {ScheduleAssignmentUpsertArgs} args - Arguments to update or create a ScheduleAssignment.
     * @example
     * // Update or create a ScheduleAssignment
     * const scheduleAssignment = await prisma.scheduleAssignment.upsert({
     *   create: {
     *     // ... data to create a ScheduleAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleAssignmentUpsertArgs>(args: SelectSubset<T, ScheduleAssignmentUpsertArgs<ExtArgs>>): Prisma__ScheduleAssignmentClient<$Result.GetResult<Prisma.$ScheduleAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduleAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentCountArgs} args - Arguments to filter ScheduleAssignments to count.
     * @example
     * // Count the number of ScheduleAssignments
     * const count = await prisma.scheduleAssignment.count({
     *   where: {
     *     // ... the filter for the ScheduleAssignments we want to count
     *   }
     * })
    **/
    count<T extends ScheduleAssignmentCountArgs>(
      args?: Subset<T, ScheduleAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAssignmentAggregateArgs>(args: Subset<T, ScheduleAssignmentAggregateArgs>): Prisma.PrismaPromise<GetScheduleAssignmentAggregateType<T>>

    /**
     * Group by ScheduleAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAssignmentGroupByArgs} args - Group by arguments.
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
      T extends ScheduleAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleAssignment model
   */
  readonly fields: ScheduleAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends ScheduleAssignment$groupArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleAssignment$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    labRoom<T extends LabRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabRoomDefaultArgs<ExtArgs>>): Prisma__LabRoomClient<$Result.GetResult<Prisma.$LabRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    labAssistant<T extends LabAssistantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabAssistantDefaultArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timeSlot<T extends TimeSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimeSlotDefaultArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScheduleAssignment model
   */
  interface ScheduleAssignmentFieldRefs {
    readonly id: FieldRef<"ScheduleAssignment", 'String'>
    readonly courseId: FieldRef<"ScheduleAssignment", 'String'>
    readonly sectionId: FieldRef<"ScheduleAssignment", 'String'>
    readonly groupId: FieldRef<"ScheduleAssignment", 'String'>
    readonly labRoomId: FieldRef<"ScheduleAssignment", 'String'>
    readonly labAssistantId: FieldRef<"ScheduleAssignment", 'String'>
    readonly timeSlotId: FieldRef<"ScheduleAssignment", 'String'>
    readonly status: FieldRef<"ScheduleAssignment", 'String'>
    readonly createdAt: FieldRef<"ScheduleAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"ScheduleAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleAssignment findUnique
   */
  export type ScheduleAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleAssignment to fetch.
     */
    where: ScheduleAssignmentWhereUniqueInput
  }

  /**
   * ScheduleAssignment findUniqueOrThrow
   */
  export type ScheduleAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleAssignment to fetch.
     */
    where: ScheduleAssignmentWhereUniqueInput
  }

  /**
   * ScheduleAssignment findFirst
   */
  export type ScheduleAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleAssignment to fetch.
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleAssignments to fetch.
     */
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleAssignments.
     */
    cursor?: ScheduleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleAssignments.
     */
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * ScheduleAssignment findFirstOrThrow
   */
  export type ScheduleAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleAssignment to fetch.
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleAssignments to fetch.
     */
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleAssignments.
     */
    cursor?: ScheduleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleAssignments.
     */
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * ScheduleAssignment findMany
   */
  export type ScheduleAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleAssignments to fetch.
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleAssignments to fetch.
     */
    orderBy?: ScheduleAssignmentOrderByWithRelationInput | ScheduleAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleAssignments.
     */
    cursor?: ScheduleAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleAssignments.
     */
    skip?: number
    distinct?: ScheduleAssignmentScalarFieldEnum | ScheduleAssignmentScalarFieldEnum[]
  }

  /**
   * ScheduleAssignment create
   */
  export type ScheduleAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleAssignment.
     */
    data: XOR<ScheduleAssignmentCreateInput, ScheduleAssignmentUncheckedCreateInput>
  }

  /**
   * ScheduleAssignment createMany
   */
  export type ScheduleAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleAssignments.
     */
    data: ScheduleAssignmentCreateManyInput | ScheduleAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleAssignment createManyAndReturn
   */
  export type ScheduleAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduleAssignments.
     */
    data: ScheduleAssignmentCreateManyInput | ScheduleAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleAssignment update
   */
  export type ScheduleAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleAssignment.
     */
    data: XOR<ScheduleAssignmentUpdateInput, ScheduleAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ScheduleAssignment to update.
     */
    where: ScheduleAssignmentWhereUniqueInput
  }

  /**
   * ScheduleAssignment updateMany
   */
  export type ScheduleAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleAssignments.
     */
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleAssignments to update
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * Limit how many ScheduleAssignments to update.
     */
    limit?: number
  }

  /**
   * ScheduleAssignment updateManyAndReturn
   */
  export type ScheduleAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ScheduleAssignments.
     */
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleAssignments to update
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * Limit how many ScheduleAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduleAssignment upsert
   */
  export type ScheduleAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleAssignment to update in case it exists.
     */
    where: ScheduleAssignmentWhereUniqueInput
    /**
     * In case the ScheduleAssignment found by the `where` argument doesn't exist, create a new ScheduleAssignment with this data.
     */
    create: XOR<ScheduleAssignmentCreateInput, ScheduleAssignmentUncheckedCreateInput>
    /**
     * In case the ScheduleAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleAssignmentUpdateInput, ScheduleAssignmentUncheckedUpdateInput>
  }

  /**
   * ScheduleAssignment delete
   */
  export type ScheduleAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ScheduleAssignment to delete.
     */
    where: ScheduleAssignmentWhereUniqueInput
  }

  /**
   * ScheduleAssignment deleteMany
   */
  export type ScheduleAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleAssignments to delete
     */
    where?: ScheduleAssignmentWhereInput
    /**
     * Limit how many ScheduleAssignments to delete.
     */
    limit?: number
  }

  /**
   * ScheduleAssignment.group
   */
  export type ScheduleAssignment$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * ScheduleAssignment without action
   */
  export type ScheduleAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleAssignment
     */
    select?: ScheduleAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleAssignment
     */
    omit?: ScheduleAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: string | null
    labAssistantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: string | null
    labAssistantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    labAssistantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    labAssistantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    labAssistantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    labAssistantId?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: string
    labAssistantId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    role?: boolean
    labAssistantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    labAssistant?: boolean | User$labAssistantArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    labAssistantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    labAssistant?: boolean | User$labAssistantArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    labAssistantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    labAssistant?: boolean | User$labAssistantArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    labAssistantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "labAssistantId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labAssistant?: boolean | User$labAssistantArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labAssistant?: boolean | User$labAssistantArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labAssistant?: boolean | User$labAssistantArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      labAssistant: Prisma.$LabAssistantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: string
      labAssistantId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    labAssistant<T extends User$labAssistantArgs<ExtArgs> = {}>(args?: Subset<T, User$labAssistantArgs<ExtArgs>>): Prisma__LabAssistantClient<$Result.GetResult<Prisma.$LabAssistantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly labAssistantId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.labAssistant
   */
  export type User$labAssistantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabAssistant
     */
    select?: LabAssistantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LabAssistant
     */
    omit?: LabAssistantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabAssistantInclude<ExtArgs> | null
    where?: LabAssistantWhereInput
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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


  export const LabRoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    location: 'location',
    equipment: 'equipment',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LabRoomScalarFieldEnum = (typeof LabRoomScalarFieldEnum)[keyof typeof LabRoomScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    department: 'department',
    credits: 'credits',
    year: 'year',
    section: 'section',
    batch: 'batch',
    studentType: 'studentType',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseOfferingScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    semester: 'semester',
    year: 'year',
    totalSections: 'totalSections',
    requiredLabSize: 'requiredLabSize',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseOfferingScalarFieldEnum = (typeof CourseOfferingScalarFieldEnum)[keyof typeof CourseOfferingScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    year: 'year',
    department: 'department',
    capacity: 'capacity',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sectionId: 'sectionId',
    capacity: 'capacity',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const LabAssistantScalarFieldEnum: {
    id: 'id',
    labAssistantId: 'labAssistantId',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    department: 'department',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LabAssistantScalarFieldEnum = (typeof LabAssistantScalarFieldEnum)[keyof typeof LabAssistantScalarFieldEnum]


  export const TimeSlotScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    slotType: 'slotType',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TimeSlotScalarFieldEnum = (typeof TimeSlotScalarFieldEnum)[keyof typeof TimeSlotScalarFieldEnum]


  export const ScheduleAssignmentScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    sectionId: 'sectionId',
    groupId: 'groupId',
    labRoomId: 'labRoomId',
    labAssistantId: 'labAssistantId',
    timeSlotId: 'timeSlotId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleAssignmentScalarFieldEnum = (typeof ScheduleAssignmentScalarFieldEnum)[keyof typeof ScheduleAssignmentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    labAssistantId: 'labAssistantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SlotType'
   */
  export type EnumSlotTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotType'>
    


  /**
   * Reference to a field of type 'SlotType[]'
   */
  export type ListEnumSlotTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotType[]'>
    


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


  export type LabRoomWhereInput = {
    AND?: LabRoomWhereInput | LabRoomWhereInput[]
    OR?: LabRoomWhereInput[]
    NOT?: LabRoomWhereInput | LabRoomWhereInput[]
    id?: StringFilter<"LabRoom"> | string
    name?: StringFilter<"LabRoom"> | string
    capacity?: IntFilter<"LabRoom"> | number
    location?: StringFilter<"LabRoom"> | string
    equipment?: StringNullableListFilter<"LabRoom">
    isActive?: BoolFilter<"LabRoom"> | boolean
    createdAt?: DateTimeFilter<"LabRoom"> | Date | string
    updatedAt?: DateTimeFilter<"LabRoom"> | Date | string
    ScheduleAssignments?: ScheduleAssignmentListRelationFilter
  }

  export type LabRoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    equipment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ScheduleAssignments?: ScheduleAssignmentOrderByRelationAggregateInput
  }

  export type LabRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LabRoomWhereInput | LabRoomWhereInput[]
    OR?: LabRoomWhereInput[]
    NOT?: LabRoomWhereInput | LabRoomWhereInput[]
    name?: StringFilter<"LabRoom"> | string
    capacity?: IntFilter<"LabRoom"> | number
    location?: StringFilter<"LabRoom"> | string
    equipment?: StringNullableListFilter<"LabRoom">
    isActive?: BoolFilter<"LabRoom"> | boolean
    createdAt?: DateTimeFilter<"LabRoom"> | Date | string
    updatedAt?: DateTimeFilter<"LabRoom"> | Date | string
    ScheduleAssignments?: ScheduleAssignmentListRelationFilter
  }, "id">

  export type LabRoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    equipment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LabRoomCountOrderByAggregateInput
    _avg?: LabRoomAvgOrderByAggregateInput
    _max?: LabRoomMaxOrderByAggregateInput
    _min?: LabRoomMinOrderByAggregateInput
    _sum?: LabRoomSumOrderByAggregateInput
  }

  export type LabRoomScalarWhereWithAggregatesInput = {
    AND?: LabRoomScalarWhereWithAggregatesInput | LabRoomScalarWhereWithAggregatesInput[]
    OR?: LabRoomScalarWhereWithAggregatesInput[]
    NOT?: LabRoomScalarWhereWithAggregatesInput | LabRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabRoom"> | string
    name?: StringWithAggregatesFilter<"LabRoom"> | string
    capacity?: IntWithAggregatesFilter<"LabRoom"> | number
    location?: StringWithAggregatesFilter<"LabRoom"> | string
    equipment?: StringNullableListFilter<"LabRoom">
    isActive?: BoolWithAggregatesFilter<"LabRoom"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LabRoom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LabRoom"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    code?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    department?: StringFilter<"Course"> | string
    credits?: IntFilter<"Course"> | number
    year?: IntFilter<"Course"> | number
    section?: StringFilter<"Course"> | string
    batch?: StringFilter<"Course"> | string
    studentType?: StringFilter<"Course"> | string
    isActive?: BoolFilter<"Course"> | boolean
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    CourseOfferings?: CourseOfferingListRelationFilter
    ScheduleAssignment?: ScheduleAssignmentListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    department?: SortOrder
    credits?: SortOrder
    year?: SortOrder
    section?: SortOrder
    batch?: SortOrder
    studentType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    CourseOfferings?: CourseOfferingOrderByRelationAggregateInput
    ScheduleAssignment?: ScheduleAssignmentOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    code?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    department?: StringFilter<"Course"> | string
    credits?: IntFilter<"Course"> | number
    year?: IntFilter<"Course"> | number
    section?: StringFilter<"Course"> | string
    batch?: StringFilter<"Course"> | string
    studentType?: StringFilter<"Course"> | string
    isActive?: BoolFilter<"Course"> | boolean
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    CourseOfferings?: CourseOfferingListRelationFilter
    ScheduleAssignment?: ScheduleAssignmentListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    department?: SortOrder
    credits?: SortOrder
    year?: SortOrder
    section?: SortOrder
    batch?: SortOrder
    studentType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    code?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    department?: StringWithAggregatesFilter<"Course"> | string
    credits?: IntWithAggregatesFilter<"Course"> | number
    year?: IntWithAggregatesFilter<"Course"> | number
    section?: StringWithAggregatesFilter<"Course"> | string
    batch?: StringWithAggregatesFilter<"Course"> | string
    studentType?: StringWithAggregatesFilter<"Course"> | string
    isActive?: BoolWithAggregatesFilter<"Course"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type CourseOfferingWhereInput = {
    AND?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    OR?: CourseOfferingWhereInput[]
    NOT?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    id?: StringFilter<"CourseOffering"> | string
    courseId?: StringFilter<"CourseOffering"> | string
    semester?: StringFilter<"CourseOffering"> | string
    year?: IntFilter<"CourseOffering"> | number
    totalSections?: IntFilter<"CourseOffering"> | number
    requiredLabSize?: IntFilter<"CourseOffering"> | number
    isActive?: BoolFilter<"CourseOffering"> | boolean
    createdAt?: DateTimeFilter<"CourseOffering"> | Date | string
    updatedAt?: DateTimeFilter<"CourseOffering"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CourseOfferingOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    totalSections?: SortOrder
    requiredLabSize?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type CourseOfferingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    OR?: CourseOfferingWhereInput[]
    NOT?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    courseId?: StringFilter<"CourseOffering"> | string
    semester?: StringFilter<"CourseOffering"> | string
    year?: IntFilter<"CourseOffering"> | number
    totalSections?: IntFilter<"CourseOffering"> | number
    requiredLabSize?: IntFilter<"CourseOffering"> | number
    isActive?: BoolFilter<"CourseOffering"> | boolean
    createdAt?: DateTimeFilter<"CourseOffering"> | Date | string
    updatedAt?: DateTimeFilter<"CourseOffering"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type CourseOfferingOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    totalSections?: SortOrder
    requiredLabSize?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseOfferingCountOrderByAggregateInput
    _avg?: CourseOfferingAvgOrderByAggregateInput
    _max?: CourseOfferingMaxOrderByAggregateInput
    _min?: CourseOfferingMinOrderByAggregateInput
    _sum?: CourseOfferingSumOrderByAggregateInput
  }

  export type CourseOfferingScalarWhereWithAggregatesInput = {
    AND?: CourseOfferingScalarWhereWithAggregatesInput | CourseOfferingScalarWhereWithAggregatesInput[]
    OR?: CourseOfferingScalarWhereWithAggregatesInput[]
    NOT?: CourseOfferingScalarWhereWithAggregatesInput | CourseOfferingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseOffering"> | string
    courseId?: StringWithAggregatesFilter<"CourseOffering"> | string
    semester?: StringWithAggregatesFilter<"CourseOffering"> | string
    year?: IntWithAggregatesFilter<"CourseOffering"> | number
    totalSections?: IntWithAggregatesFilter<"CourseOffering"> | number
    requiredLabSize?: IntWithAggregatesFilter<"CourseOffering"> | number
    isActive?: BoolWithAggregatesFilter<"CourseOffering"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CourseOffering"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseOffering"> | Date | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    name?: StringFilter<"Section"> | string
    year?: IntFilter<"Section"> | number
    department?: StringFilter<"Section"> | string
    capacity?: IntFilter<"Section"> | number
    isActive?: BoolFilter<"Section"> | boolean
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    Groups?: GroupListRelationFilter
    ScheduleAssignment?: ScheduleAssignmentListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    department?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Groups?: GroupOrderByRelationAggregateInput
    ScheduleAssignment?: ScheduleAssignmentOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    name?: StringFilter<"Section"> | string
    year?: IntFilter<"Section"> | number
    department?: StringFilter<"Section"> | string
    capacity?: IntFilter<"Section"> | number
    isActive?: BoolFilter<"Section"> | boolean
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    Groups?: GroupListRelationFilter
    ScheduleAssignment?: ScheduleAssignmentListRelationFilter
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    department?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    name?: StringWithAggregatesFilter<"Section"> | string
    year?: IntWithAggregatesFilter<"Section"> | number
    department?: StringWithAggregatesFilter<"Section"> | string
    capacity?: IntWithAggregatesFilter<"Section"> | number
    isActive?: BoolWithAggregatesFilter<"Section"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    sectionId?: StringFilter<"Group"> | string
    capacity?: IntFilter<"Group"> | number
    isActive?: BoolFilter<"Group"> | boolean
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    ScheduleAssignment?: ScheduleAssignmentListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sectionId?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    section?: SectionOrderByWithRelationInput
    ScheduleAssignment?: ScheduleAssignmentOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    sectionId?: StringFilter<"Group"> | string
    capacity?: IntFilter<"Group"> | number
    isActive?: BoolFilter<"Group"> | boolean
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    ScheduleAssignment?: ScheduleAssignmentListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sectionId?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    sectionId?: StringWithAggregatesFilter<"Group"> | string
    capacity?: IntWithAggregatesFilter<"Group"> | number
    isActive?: BoolWithAggregatesFilter<"Group"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type LabAssistantWhereInput = {
    AND?: LabAssistantWhereInput | LabAssistantWhereInput[]
    OR?: LabAssistantWhereInput[]
    NOT?: LabAssistantWhereInput | LabAssistantWhereInput[]
    id?: StringFilter<"LabAssistant"> | string
    labAssistantId?: StringFilter<"LabAssistant"> | string
    username?: StringFilter<"LabAssistant"> | string
    firstName?: StringFilter<"LabAssistant"> | string
    lastName?: StringFilter<"LabAssistant"> | string
    email?: StringFilter<"LabAssistant"> | string
    password?: StringFilter<"LabAssistant"> | string
    department?: StringFilter<"LabAssistant"> | string
    isActive?: BoolFilter<"LabAssistant"> | boolean
    createdAt?: DateTimeFilter<"LabAssistant"> | Date | string
    updatedAt?: DateTimeFilter<"LabAssistant"> | Date | string
    ScheduleAssignments?: ScheduleAssignmentListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LabAssistantOrderByWithRelationInput = {
    id?: SortOrder
    labAssistantId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ScheduleAssignments?: ScheduleAssignmentOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type LabAssistantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    labAssistantId?: string
    AND?: LabAssistantWhereInput | LabAssistantWhereInput[]
    OR?: LabAssistantWhereInput[]
    NOT?: LabAssistantWhereInput | LabAssistantWhereInput[]
    username?: StringFilter<"LabAssistant"> | string
    firstName?: StringFilter<"LabAssistant"> | string
    lastName?: StringFilter<"LabAssistant"> | string
    email?: StringFilter<"LabAssistant"> | string
    password?: StringFilter<"LabAssistant"> | string
    department?: StringFilter<"LabAssistant"> | string
    isActive?: BoolFilter<"LabAssistant"> | boolean
    createdAt?: DateTimeFilter<"LabAssistant"> | Date | string
    updatedAt?: DateTimeFilter<"LabAssistant"> | Date | string
    ScheduleAssignments?: ScheduleAssignmentListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "labAssistantId">

  export type LabAssistantOrderByWithAggregationInput = {
    id?: SortOrder
    labAssistantId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LabAssistantCountOrderByAggregateInput
    _max?: LabAssistantMaxOrderByAggregateInput
    _min?: LabAssistantMinOrderByAggregateInput
  }

  export type LabAssistantScalarWhereWithAggregatesInput = {
    AND?: LabAssistantScalarWhereWithAggregatesInput | LabAssistantScalarWhereWithAggregatesInput[]
    OR?: LabAssistantScalarWhereWithAggregatesInput[]
    NOT?: LabAssistantScalarWhereWithAggregatesInput | LabAssistantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LabAssistant"> | string
    labAssistantId?: StringWithAggregatesFilter<"LabAssistant"> | string
    username?: StringWithAggregatesFilter<"LabAssistant"> | string
    firstName?: StringWithAggregatesFilter<"LabAssistant"> | string
    lastName?: StringWithAggregatesFilter<"LabAssistant"> | string
    email?: StringWithAggregatesFilter<"LabAssistant"> | string
    password?: StringWithAggregatesFilter<"LabAssistant"> | string
    department?: StringWithAggregatesFilter<"LabAssistant"> | string
    isActive?: BoolWithAggregatesFilter<"LabAssistant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LabAssistant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LabAssistant"> | Date | string
  }

  export type TimeSlotWhereInput = {
    AND?: TimeSlotWhereInput | TimeSlotWhereInput[]
    OR?: TimeSlotWhereInput[]
    NOT?: TimeSlotWhereInput | TimeSlotWhereInput[]
    id?: StringFilter<"TimeSlot"> | string
    dayOfWeek?: StringFilter<"TimeSlot"> | string
    startTime?: StringFilter<"TimeSlot"> | string
    endTime?: StringFilter<"TimeSlot"> | string
    slotType?: EnumSlotTypeFilter<"TimeSlot"> | $Enums.SlotType
    isActive?: BoolFilter<"TimeSlot"> | boolean
    createdAt?: DateTimeFilter<"TimeSlot"> | Date | string
    updatedAt?: DateTimeFilter<"TimeSlot"> | Date | string
    ScheduleAssignments?: ScheduleAssignmentListRelationFilter
  }

  export type TimeSlotOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ScheduleAssignments?: ScheduleAssignmentOrderByRelationAggregateInput
  }

  export type TimeSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeSlotWhereInput | TimeSlotWhereInput[]
    OR?: TimeSlotWhereInput[]
    NOT?: TimeSlotWhereInput | TimeSlotWhereInput[]
    dayOfWeek?: StringFilter<"TimeSlot"> | string
    startTime?: StringFilter<"TimeSlot"> | string
    endTime?: StringFilter<"TimeSlot"> | string
    slotType?: EnumSlotTypeFilter<"TimeSlot"> | $Enums.SlotType
    isActive?: BoolFilter<"TimeSlot"> | boolean
    createdAt?: DateTimeFilter<"TimeSlot"> | Date | string
    updatedAt?: DateTimeFilter<"TimeSlot"> | Date | string
    ScheduleAssignments?: ScheduleAssignmentListRelationFilter
  }, "id">

  export type TimeSlotOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TimeSlotCountOrderByAggregateInput
    _max?: TimeSlotMaxOrderByAggregateInput
    _min?: TimeSlotMinOrderByAggregateInput
  }

  export type TimeSlotScalarWhereWithAggregatesInput = {
    AND?: TimeSlotScalarWhereWithAggregatesInput | TimeSlotScalarWhereWithAggregatesInput[]
    OR?: TimeSlotScalarWhereWithAggregatesInput[]
    NOT?: TimeSlotScalarWhereWithAggregatesInput | TimeSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeSlot"> | string
    dayOfWeek?: StringWithAggregatesFilter<"TimeSlot"> | string
    startTime?: StringWithAggregatesFilter<"TimeSlot"> | string
    endTime?: StringWithAggregatesFilter<"TimeSlot"> | string
    slotType?: EnumSlotTypeWithAggregatesFilter<"TimeSlot"> | $Enums.SlotType
    isActive?: BoolWithAggregatesFilter<"TimeSlot"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TimeSlot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TimeSlot"> | Date | string
  }

  export type ScheduleAssignmentWhereInput = {
    AND?: ScheduleAssignmentWhereInput | ScheduleAssignmentWhereInput[]
    OR?: ScheduleAssignmentWhereInput[]
    NOT?: ScheduleAssignmentWhereInput | ScheduleAssignmentWhereInput[]
    id?: StringFilter<"ScheduleAssignment"> | string
    courseId?: StringFilter<"ScheduleAssignment"> | string
    sectionId?: StringFilter<"ScheduleAssignment"> | string
    groupId?: StringNullableFilter<"ScheduleAssignment"> | string | null
    labRoomId?: StringFilter<"ScheduleAssignment"> | string
    labAssistantId?: StringFilter<"ScheduleAssignment"> | string
    timeSlotId?: StringFilter<"ScheduleAssignment"> | string
    status?: StringFilter<"ScheduleAssignment"> | string
    createdAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    labRoom?: XOR<LabRoomScalarRelationFilter, LabRoomWhereInput>
    labAssistant?: XOR<LabAssistantScalarRelationFilter, LabAssistantWhereInput>
    timeSlot?: XOR<TimeSlotScalarRelationFilter, TimeSlotWhereInput>
  }

  export type ScheduleAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    sectionId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    labRoomId?: SortOrder
    labAssistantId?: SortOrder
    timeSlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    section?: SectionOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    labRoom?: LabRoomOrderByWithRelationInput
    labAssistant?: LabAssistantOrderByWithRelationInput
    timeSlot?: TimeSlotOrderByWithRelationInput
  }

  export type ScheduleAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleAssignmentWhereInput | ScheduleAssignmentWhereInput[]
    OR?: ScheduleAssignmentWhereInput[]
    NOT?: ScheduleAssignmentWhereInput | ScheduleAssignmentWhereInput[]
    courseId?: StringFilter<"ScheduleAssignment"> | string
    sectionId?: StringFilter<"ScheduleAssignment"> | string
    groupId?: StringNullableFilter<"ScheduleAssignment"> | string | null
    labRoomId?: StringFilter<"ScheduleAssignment"> | string
    labAssistantId?: StringFilter<"ScheduleAssignment"> | string
    timeSlotId?: StringFilter<"ScheduleAssignment"> | string
    status?: StringFilter<"ScheduleAssignment"> | string
    createdAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    labRoom?: XOR<LabRoomScalarRelationFilter, LabRoomWhereInput>
    labAssistant?: XOR<LabAssistantScalarRelationFilter, LabAssistantWhereInput>
    timeSlot?: XOR<TimeSlotScalarRelationFilter, TimeSlotWhereInput>
  }, "id">

  export type ScheduleAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    sectionId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    labRoomId?: SortOrder
    labAssistantId?: SortOrder
    timeSlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleAssignmentCountOrderByAggregateInput
    _max?: ScheduleAssignmentMaxOrderByAggregateInput
    _min?: ScheduleAssignmentMinOrderByAggregateInput
  }

  export type ScheduleAssignmentScalarWhereWithAggregatesInput = {
    AND?: ScheduleAssignmentScalarWhereWithAggregatesInput | ScheduleAssignmentScalarWhereWithAggregatesInput[]
    OR?: ScheduleAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ScheduleAssignmentScalarWhereWithAggregatesInput | ScheduleAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    courseId?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    sectionId?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    groupId?: StringNullableWithAggregatesFilter<"ScheduleAssignment"> | string | null
    labRoomId?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    labAssistantId?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    timeSlotId?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    status?: StringWithAggregatesFilter<"ScheduleAssignment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScheduleAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScheduleAssignment"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    labAssistantId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    labAssistant?: XOR<LabAssistantNullableScalarRelationFilter, LabAssistantWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    labAssistantId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    labAssistant?: LabAssistantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    labAssistantId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    labAssistant?: XOR<LabAssistantNullableScalarRelationFilter, LabAssistantWhereInput> | null
  }, "id" | "email" | "labAssistantId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    labAssistantId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    labAssistantId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LabRoomCreateInput = {
    id?: string
    name: string
    capacity: number
    location: string
    equipment?: LabRoomCreateequipmentInput | string[]
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignments?: ScheduleAssignmentCreateNestedManyWithoutLabRoomInput
  }

  export type LabRoomUncheckedCreateInput = {
    id?: string
    name: string
    capacity: number
    location: string
    equipment?: LabRoomCreateequipmentInput | string[]
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignments?: ScheduleAssignmentUncheckedCreateNestedManyWithoutLabRoomInput
  }

  export type LabRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    equipment?: LabRoomUpdateequipmentInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignments?: ScheduleAssignmentUpdateManyWithoutLabRoomNestedInput
  }

  export type LabRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    equipment?: LabRoomUpdateequipmentInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignments?: ScheduleAssignmentUncheckedUpdateManyWithoutLabRoomNestedInput
  }

  export type LabRoomCreateManyInput = {
    id?: string
    name: string
    capacity: number
    location: string
    equipment?: LabRoomCreateequipmentInput | string[]
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    equipment?: LabRoomUpdateequipmentInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    equipment?: LabRoomUpdateequipmentInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    code: string
    name: string
    department: string
    credits: number
    year: number
    section: string
    batch: string
    studentType: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    CourseOfferings?: CourseOfferingCreateNestedManyWithoutCourseInput
    ScheduleAssignment?: ScheduleAssignmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    department: string
    credits: number
    year: number
    section: string
    batch: string
    studentType: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    CourseOfferings?: CourseOfferingUncheckedCreateNestedManyWithoutCourseInput
    ScheduleAssignment?: ScheduleAssignmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    studentType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CourseOfferings?: CourseOfferingUpdateManyWithoutCourseNestedInput
    ScheduleAssignment?: ScheduleAssignmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    studentType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CourseOfferings?: CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput
    ScheduleAssignment?: ScheduleAssignmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    code: string
    name: string
    department: string
    credits: number
    year: number
    section: string
    batch: string
    studentType: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    studentType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    studentType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseOfferingCreateInput = {
    id?: string
    semester: string
    year: number
    totalSections: number
    requiredLabSize: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseOfferingsInput
  }

  export type CourseOfferingUncheckedCreateInput = {
    id?: string
    courseId: string
    semester: string
    year: number
    totalSections: number
    requiredLabSize: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseOfferingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalSections?: IntFieldUpdateOperationsInput | number
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseOfferingsNestedInput
  }

  export type CourseOfferingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalSections?: IntFieldUpdateOperationsInput | number
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseOfferingCreateManyInput = {
    id?: string
    courseId: string
    semester: string
    year: number
    totalSections: number
    requiredLabSize: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseOfferingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalSections?: IntFieldUpdateOperationsInput | number
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseOfferingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalSections?: IntFieldUpdateOperationsInput | number
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateInput = {
    id?: string
    name: string
    year: number
    department: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Groups?: GroupCreateNestedManyWithoutSectionInput
    ScheduleAssignment?: ScheduleAssignmentCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    name: string
    year: number
    department: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Groups?: GroupUncheckedCreateNestedManyWithoutSectionInput
    ScheduleAssignment?: ScheduleAssignmentUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Groups?: GroupUpdateManyWithoutSectionNestedInput
    ScheduleAssignment?: ScheduleAssignmentUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Groups?: GroupUncheckedUpdateManyWithoutSectionNestedInput
    ScheduleAssignment?: ScheduleAssignmentUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    name: string
    year: number
    department: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    section: SectionCreateNestedOneWithoutGroupsInput
    ScheduleAssignment?: ScheduleAssignmentCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    sectionId: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignment?: ScheduleAssignmentUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateOneRequiredWithoutGroupsNestedInput
    ScheduleAssignment?: ScheduleAssignmentUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignment?: ScheduleAssignmentUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    sectionId: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabAssistantCreateInput = {
    id?: string
    labAssistantId: string
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    department: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignments?: ScheduleAssignmentCreateNestedManyWithoutLabAssistantInput
    user?: UserCreateNestedOneWithoutLabAssistantInput
  }

  export type LabAssistantUncheckedCreateInput = {
    id?: string
    labAssistantId: string
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    department: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignments?: ScheduleAssignmentUncheckedCreateNestedManyWithoutLabAssistantInput
    user?: UserUncheckedCreateNestedOneWithoutLabAssistantInput
  }

  export type LabAssistantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignments?: ScheduleAssignmentUpdateManyWithoutLabAssistantNestedInput
    user?: UserUpdateOneWithoutLabAssistantNestedInput
  }

  export type LabAssistantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignments?: ScheduleAssignmentUncheckedUpdateManyWithoutLabAssistantNestedInput
    user?: UserUncheckedUpdateOneWithoutLabAssistantNestedInput
  }

  export type LabAssistantCreateManyInput = {
    id?: string
    labAssistantId: string
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    department: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabAssistantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabAssistantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotCreateInput = {
    id?: string
    dayOfWeek: string
    startTime: string
    endTime: string
    slotType: $Enums.SlotType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignments?: ScheduleAssignmentCreateNestedManyWithoutTimeSlotInput
  }

  export type TimeSlotUncheckedCreateInput = {
    id?: string
    dayOfWeek: string
    startTime: string
    endTime: string
    slotType: $Enums.SlotType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignments?: ScheduleAssignmentUncheckedCreateNestedManyWithoutTimeSlotInput
  }

  export type TimeSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotType?: EnumSlotTypeFieldUpdateOperationsInput | $Enums.SlotType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignments?: ScheduleAssignmentUpdateManyWithoutTimeSlotNestedInput
  }

  export type TimeSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotType?: EnumSlotTypeFieldUpdateOperationsInput | $Enums.SlotType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignments?: ScheduleAssignmentUncheckedUpdateManyWithoutTimeSlotNestedInput
  }

  export type TimeSlotCreateManyInput = {
    id?: string
    dayOfWeek: string
    startTime: string
    endTime: string
    slotType: $Enums.SlotType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotType?: EnumSlotTypeFieldUpdateOperationsInput | $Enums.SlotType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotType?: EnumSlotTypeFieldUpdateOperationsInput | $Enums.SlotType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutScheduleAssignmentInput
    section: SectionCreateNestedOneWithoutScheduleAssignmentInput
    group?: GroupCreateNestedOneWithoutScheduleAssignmentInput
    labRoom: LabRoomCreateNestedOneWithoutScheduleAssignmentsInput
    labAssistant: LabAssistantCreateNestedOneWithoutScheduleAssignmentsInput
    timeSlot: TimeSlotCreateNestedOneWithoutScheduleAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateInput = {
    id?: string
    courseId: string
    sectionId: string
    groupId?: string | null
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    section?: SectionUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    group?: GroupUpdateOneWithoutScheduleAssignmentNestedInput
    labRoom?: LabRoomUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
    labAssistant?: LabAssistantUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
    timeSlot?: TimeSlotUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentCreateManyInput = {
    id?: string
    courseId: string
    sectionId: string
    groupId?: string | null
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    labAssistant?: LabAssistantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role: string
    labAssistantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labAssistant?: LabAssistantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    labAssistantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role: string
    labAssistantId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    labAssistantId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ScheduleAssignmentListRelationFilter = {
    every?: ScheduleAssignmentWhereInput
    some?: ScheduleAssignmentWhereInput
    none?: ScheduleAssignmentWhereInput
  }

  export type ScheduleAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabRoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    equipment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabRoomAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type LabRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabRoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabRoomSumOrderByAggregateInput = {
    capacity?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CourseOfferingListRelationFilter = {
    every?: CourseOfferingWhereInput
    some?: CourseOfferingWhereInput
    none?: CourseOfferingWhereInput
  }

  export type CourseOfferingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    department?: SortOrder
    credits?: SortOrder
    year?: SortOrder
    section?: SortOrder
    batch?: SortOrder
    studentType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    credits?: SortOrder
    year?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    department?: SortOrder
    credits?: SortOrder
    year?: SortOrder
    section?: SortOrder
    batch?: SortOrder
    studentType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    department?: SortOrder
    credits?: SortOrder
    year?: SortOrder
    section?: SortOrder
    batch?: SortOrder
    studentType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    credits?: SortOrder
    year?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CourseOfferingCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    totalSections?: SortOrder
    requiredLabSize?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseOfferingAvgOrderByAggregateInput = {
    year?: SortOrder
    totalSections?: SortOrder
    requiredLabSize?: SortOrder
  }

  export type CourseOfferingMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    totalSections?: SortOrder
    requiredLabSize?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseOfferingMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    year?: SortOrder
    totalSections?: SortOrder
    requiredLabSize?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseOfferingSumOrderByAggregateInput = {
    year?: SortOrder
    totalSections?: SortOrder
    requiredLabSize?: SortOrder
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    department?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    year?: SortOrder
    capacity?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    department?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    department?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    year?: SortOrder
    capacity?: SortOrder
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectionId?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectionId?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectionId?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LabAssistantCountOrderByAggregateInput = {
    id?: SortOrder
    labAssistantId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabAssistantMaxOrderByAggregateInput = {
    id?: SortOrder
    labAssistantId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabAssistantMinOrderByAggregateInput = {
    id?: SortOrder
    labAssistantId?: SortOrder
    username?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSlotTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotType | EnumSlotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotType[] | ListEnumSlotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotType[] | ListEnumSlotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotTypeFilter<$PrismaModel> | $Enums.SlotType
  }

  export type TimeSlotCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimeSlotMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSlotTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotType | EnumSlotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotType[] | ListEnumSlotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotType[] | ListEnumSlotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotTypeWithAggregatesFilter<$PrismaModel> | $Enums.SlotType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotTypeFilter<$PrismaModel>
    _max?: NestedEnumSlotTypeFilter<$PrismaModel>
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
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type LabRoomScalarRelationFilter = {
    is?: LabRoomWhereInput
    isNot?: LabRoomWhereInput
  }

  export type LabAssistantScalarRelationFilter = {
    is?: LabAssistantWhereInput
    isNot?: LabAssistantWhereInput
  }

  export type TimeSlotScalarRelationFilter = {
    is?: TimeSlotWhereInput
    isNot?: TimeSlotWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScheduleAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    sectionId?: SortOrder
    groupId?: SortOrder
    labRoomId?: SortOrder
    labAssistantId?: SortOrder
    timeSlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    sectionId?: SortOrder
    groupId?: SortOrder
    labRoomId?: SortOrder
    labAssistantId?: SortOrder
    timeSlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    sectionId?: SortOrder
    groupId?: SortOrder
    labRoomId?: SortOrder
    labAssistantId?: SortOrder
    timeSlotId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type LabAssistantNullableScalarRelationFilter = {
    is?: LabAssistantWhereInput | null
    isNot?: LabAssistantWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    labAssistantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    labAssistantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    labAssistantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LabRoomCreateequipmentInput = {
    set: string[]
  }

  export type ScheduleAssignmentCreateNestedManyWithoutLabRoomInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput> | ScheduleAssignmentCreateWithoutLabRoomInput[] | ScheduleAssignmentUncheckedCreateWithoutLabRoomInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabRoomInput | ScheduleAssignmentCreateOrConnectWithoutLabRoomInput[]
    createMany?: ScheduleAssignmentCreateManyLabRoomInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type ScheduleAssignmentUncheckedCreateNestedManyWithoutLabRoomInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput> | ScheduleAssignmentCreateWithoutLabRoomInput[] | ScheduleAssignmentUncheckedCreateWithoutLabRoomInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabRoomInput | ScheduleAssignmentCreateOrConnectWithoutLabRoomInput[]
    createMany?: ScheduleAssignmentCreateManyLabRoomInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
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

  export type LabRoomUpdateequipmentInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ScheduleAssignmentUpdateManyWithoutLabRoomNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput> | ScheduleAssignmentCreateWithoutLabRoomInput[] | ScheduleAssignmentUncheckedCreateWithoutLabRoomInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabRoomInput | ScheduleAssignmentCreateOrConnectWithoutLabRoomInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutLabRoomInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutLabRoomInput[]
    createMany?: ScheduleAssignmentCreateManyLabRoomInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutLabRoomInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutLabRoomInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutLabRoomInput | ScheduleAssignmentUpdateManyWithWhereWithoutLabRoomInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutLabRoomNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput> | ScheduleAssignmentCreateWithoutLabRoomInput[] | ScheduleAssignmentUncheckedCreateWithoutLabRoomInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabRoomInput | ScheduleAssignmentCreateOrConnectWithoutLabRoomInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutLabRoomInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutLabRoomInput[]
    createMany?: ScheduleAssignmentCreateManyLabRoomInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutLabRoomInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutLabRoomInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutLabRoomInput | ScheduleAssignmentUpdateManyWithWhereWithoutLabRoomInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type CourseOfferingCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type ScheduleAssignmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutCourseInput, ScheduleAssignmentUncheckedCreateWithoutCourseInput> | ScheduleAssignmentCreateWithoutCourseInput[] | ScheduleAssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutCourseInput | ScheduleAssignmentCreateOrConnectWithoutCourseInput[]
    createMany?: ScheduleAssignmentCreateManyCourseInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type CourseOfferingUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type ScheduleAssignmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutCourseInput, ScheduleAssignmentUncheckedCreateWithoutCourseInput> | ScheduleAssignmentCreateWithoutCourseInput[] | ScheduleAssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutCourseInput | ScheduleAssignmentCreateOrConnectWithoutCourseInput[]
    createMany?: ScheduleAssignmentCreateManyCourseInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type CourseOfferingUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutCourseInput | CourseOfferingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutCourseInput | CourseOfferingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutCourseInput | CourseOfferingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type ScheduleAssignmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutCourseInput, ScheduleAssignmentUncheckedCreateWithoutCourseInput> | ScheduleAssignmentCreateWithoutCourseInput[] | ScheduleAssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutCourseInput | ScheduleAssignmentCreateOrConnectWithoutCourseInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutCourseInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ScheduleAssignmentCreateManyCourseInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutCourseInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutCourseInput | ScheduleAssignmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutCourseInput | CourseOfferingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutCourseInput | CourseOfferingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutCourseInput | CourseOfferingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutCourseInput, ScheduleAssignmentUncheckedCreateWithoutCourseInput> | ScheduleAssignmentCreateWithoutCourseInput[] | ScheduleAssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutCourseInput | ScheduleAssignmentCreateOrConnectWithoutCourseInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutCourseInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ScheduleAssignmentCreateManyCourseInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutCourseInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutCourseInput | ScheduleAssignmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutCourseOfferingsInput = {
    create?: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseOfferingsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutCourseOfferingsNestedInput = {
    create?: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseOfferingsInput
    upsert?: CourseUpsertWithoutCourseOfferingsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseOfferingsInput, CourseUpdateWithoutCourseOfferingsInput>, CourseUncheckedUpdateWithoutCourseOfferingsInput>
  }

  export type GroupCreateNestedManyWithoutSectionInput = {
    create?: XOR<GroupCreateWithoutSectionInput, GroupUncheckedCreateWithoutSectionInput> | GroupCreateWithoutSectionInput[] | GroupUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutSectionInput | GroupCreateOrConnectWithoutSectionInput[]
    createMany?: GroupCreateManySectionInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type ScheduleAssignmentCreateNestedManyWithoutSectionInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput> | ScheduleAssignmentCreateWithoutSectionInput[] | ScheduleAssignmentUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutSectionInput | ScheduleAssignmentCreateOrConnectWithoutSectionInput[]
    createMany?: ScheduleAssignmentCreateManySectionInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<GroupCreateWithoutSectionInput, GroupUncheckedCreateWithoutSectionInput> | GroupCreateWithoutSectionInput[] | GroupUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutSectionInput | GroupCreateOrConnectWithoutSectionInput[]
    createMany?: GroupCreateManySectionInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type ScheduleAssignmentUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput> | ScheduleAssignmentCreateWithoutSectionInput[] | ScheduleAssignmentUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutSectionInput | ScheduleAssignmentCreateOrConnectWithoutSectionInput[]
    createMany?: ScheduleAssignmentCreateManySectionInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type GroupUpdateManyWithoutSectionNestedInput = {
    create?: XOR<GroupCreateWithoutSectionInput, GroupUncheckedCreateWithoutSectionInput> | GroupCreateWithoutSectionInput[] | GroupUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutSectionInput | GroupCreateOrConnectWithoutSectionInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutSectionInput | GroupUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: GroupCreateManySectionInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutSectionInput | GroupUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutSectionInput | GroupUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type ScheduleAssignmentUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput> | ScheduleAssignmentCreateWithoutSectionInput[] | ScheduleAssignmentUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutSectionInput | ScheduleAssignmentCreateOrConnectWithoutSectionInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutSectionInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ScheduleAssignmentCreateManySectionInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutSectionInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutSectionInput | ScheduleAssignmentUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<GroupCreateWithoutSectionInput, GroupUncheckedCreateWithoutSectionInput> | GroupCreateWithoutSectionInput[] | GroupUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutSectionInput | GroupCreateOrConnectWithoutSectionInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutSectionInput | GroupUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: GroupCreateManySectionInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutSectionInput | GroupUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutSectionInput | GroupUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput> | ScheduleAssignmentCreateWithoutSectionInput[] | ScheduleAssignmentUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutSectionInput | ScheduleAssignmentCreateOrConnectWithoutSectionInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutSectionInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ScheduleAssignmentCreateManySectionInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutSectionInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutSectionInput | ScheduleAssignmentUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type SectionCreateNestedOneWithoutGroupsInput = {
    create?: XOR<SectionCreateWithoutGroupsInput, SectionUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutGroupsInput
    connect?: SectionWhereUniqueInput
  }

  export type ScheduleAssignmentCreateNestedManyWithoutGroupInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutGroupInput, ScheduleAssignmentUncheckedCreateWithoutGroupInput> | ScheduleAssignmentCreateWithoutGroupInput[] | ScheduleAssignmentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutGroupInput | ScheduleAssignmentCreateOrConnectWithoutGroupInput[]
    createMany?: ScheduleAssignmentCreateManyGroupInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type ScheduleAssignmentUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutGroupInput, ScheduleAssignmentUncheckedCreateWithoutGroupInput> | ScheduleAssignmentCreateWithoutGroupInput[] | ScheduleAssignmentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutGroupInput | ScheduleAssignmentCreateOrConnectWithoutGroupInput[]
    createMany?: ScheduleAssignmentCreateManyGroupInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type SectionUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<SectionCreateWithoutGroupsInput, SectionUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutGroupsInput
    upsert?: SectionUpsertWithoutGroupsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutGroupsInput, SectionUpdateWithoutGroupsInput>, SectionUncheckedUpdateWithoutGroupsInput>
  }

  export type ScheduleAssignmentUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutGroupInput, ScheduleAssignmentUncheckedCreateWithoutGroupInput> | ScheduleAssignmentCreateWithoutGroupInput[] | ScheduleAssignmentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutGroupInput | ScheduleAssignmentCreateOrConnectWithoutGroupInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutGroupInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ScheduleAssignmentCreateManyGroupInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutGroupInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutGroupInput | ScheduleAssignmentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutGroupInput, ScheduleAssignmentUncheckedCreateWithoutGroupInput> | ScheduleAssignmentCreateWithoutGroupInput[] | ScheduleAssignmentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutGroupInput | ScheduleAssignmentCreateOrConnectWithoutGroupInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutGroupInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ScheduleAssignmentCreateManyGroupInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutGroupInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutGroupInput | ScheduleAssignmentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type ScheduleAssignmentCreateNestedManyWithoutLabAssistantInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput> | ScheduleAssignmentCreateWithoutLabAssistantInput[] | ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput | ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput[]
    createMany?: ScheduleAssignmentCreateManyLabAssistantInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutLabAssistantInput = {
    create?: XOR<UserCreateWithoutLabAssistantInput, UserUncheckedCreateWithoutLabAssistantInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabAssistantInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduleAssignmentUncheckedCreateNestedManyWithoutLabAssistantInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput> | ScheduleAssignmentCreateWithoutLabAssistantInput[] | ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput | ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput[]
    createMany?: ScheduleAssignmentCreateManyLabAssistantInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutLabAssistantInput = {
    create?: XOR<UserCreateWithoutLabAssistantInput, UserUncheckedCreateWithoutLabAssistantInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabAssistantInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduleAssignmentUpdateManyWithoutLabAssistantNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput> | ScheduleAssignmentCreateWithoutLabAssistantInput[] | ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput | ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutLabAssistantInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutLabAssistantInput[]
    createMany?: ScheduleAssignmentCreateManyLabAssistantInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutLabAssistantInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutLabAssistantInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutLabAssistantInput | ScheduleAssignmentUpdateManyWithWhereWithoutLabAssistantInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type UserUpdateOneWithoutLabAssistantNestedInput = {
    create?: XOR<UserCreateWithoutLabAssistantInput, UserUncheckedCreateWithoutLabAssistantInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabAssistantInput
    upsert?: UserUpsertWithoutLabAssistantInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLabAssistantInput, UserUpdateWithoutLabAssistantInput>, UserUncheckedUpdateWithoutLabAssistantInput>
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutLabAssistantNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput> | ScheduleAssignmentCreateWithoutLabAssistantInput[] | ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput | ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutLabAssistantInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutLabAssistantInput[]
    createMany?: ScheduleAssignmentCreateManyLabAssistantInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutLabAssistantInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutLabAssistantInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutLabAssistantInput | ScheduleAssignmentUpdateManyWithWhereWithoutLabAssistantInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutLabAssistantNestedInput = {
    create?: XOR<UserCreateWithoutLabAssistantInput, UserUncheckedCreateWithoutLabAssistantInput>
    connectOrCreate?: UserCreateOrConnectWithoutLabAssistantInput
    upsert?: UserUpsertWithoutLabAssistantInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLabAssistantInput, UserUpdateWithoutLabAssistantInput>, UserUncheckedUpdateWithoutLabAssistantInput>
  }

  export type ScheduleAssignmentCreateNestedManyWithoutTimeSlotInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput> | ScheduleAssignmentCreateWithoutTimeSlotInput[] | ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput | ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput[]
    createMany?: ScheduleAssignmentCreateManyTimeSlotInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type ScheduleAssignmentUncheckedCreateNestedManyWithoutTimeSlotInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput> | ScheduleAssignmentCreateWithoutTimeSlotInput[] | ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput | ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput[]
    createMany?: ScheduleAssignmentCreateManyTimeSlotInputEnvelope
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
  }

  export type EnumSlotTypeFieldUpdateOperationsInput = {
    set?: $Enums.SlotType
  }

  export type ScheduleAssignmentUpdateManyWithoutTimeSlotNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput> | ScheduleAssignmentCreateWithoutTimeSlotInput[] | ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput | ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutTimeSlotInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutTimeSlotInput[]
    createMany?: ScheduleAssignmentCreateManyTimeSlotInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutTimeSlotInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutTimeSlotInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutTimeSlotInput | ScheduleAssignmentUpdateManyWithWhereWithoutTimeSlotInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutTimeSlotNestedInput = {
    create?: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput> | ScheduleAssignmentCreateWithoutTimeSlotInput[] | ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput | ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput[]
    upsert?: ScheduleAssignmentUpsertWithWhereUniqueWithoutTimeSlotInput | ScheduleAssignmentUpsertWithWhereUniqueWithoutTimeSlotInput[]
    createMany?: ScheduleAssignmentCreateManyTimeSlotInputEnvelope
    set?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    disconnect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    delete?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    connect?: ScheduleAssignmentWhereUniqueInput | ScheduleAssignmentWhereUniqueInput[]
    update?: ScheduleAssignmentUpdateWithWhereUniqueWithoutTimeSlotInput | ScheduleAssignmentUpdateWithWhereUniqueWithoutTimeSlotInput[]
    updateMany?: ScheduleAssignmentUpdateManyWithWhereWithoutTimeSlotInput | ScheduleAssignmentUpdateManyWithWhereWithoutTimeSlotInput[]
    deleteMany?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutScheduleAssignmentInput = {
    create?: XOR<CourseCreateWithoutScheduleAssignmentInput, CourseUncheckedCreateWithoutScheduleAssignmentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutScheduleAssignmentInput
    connect?: CourseWhereUniqueInput
  }

  export type SectionCreateNestedOneWithoutScheduleAssignmentInput = {
    create?: XOR<SectionCreateWithoutScheduleAssignmentInput, SectionUncheckedCreateWithoutScheduleAssignmentInput>
    connectOrCreate?: SectionCreateOrConnectWithoutScheduleAssignmentInput
    connect?: SectionWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutScheduleAssignmentInput = {
    create?: XOR<GroupCreateWithoutScheduleAssignmentInput, GroupUncheckedCreateWithoutScheduleAssignmentInput>
    connectOrCreate?: GroupCreateOrConnectWithoutScheduleAssignmentInput
    connect?: GroupWhereUniqueInput
  }

  export type LabRoomCreateNestedOneWithoutScheduleAssignmentsInput = {
    create?: XOR<LabRoomCreateWithoutScheduleAssignmentsInput, LabRoomUncheckedCreateWithoutScheduleAssignmentsInput>
    connectOrCreate?: LabRoomCreateOrConnectWithoutScheduleAssignmentsInput
    connect?: LabRoomWhereUniqueInput
  }

  export type LabAssistantCreateNestedOneWithoutScheduleAssignmentsInput = {
    create?: XOR<LabAssistantCreateWithoutScheduleAssignmentsInput, LabAssistantUncheckedCreateWithoutScheduleAssignmentsInput>
    connectOrCreate?: LabAssistantCreateOrConnectWithoutScheduleAssignmentsInput
    connect?: LabAssistantWhereUniqueInput
  }

  export type TimeSlotCreateNestedOneWithoutScheduleAssignmentsInput = {
    create?: XOR<TimeSlotCreateWithoutScheduleAssignmentsInput, TimeSlotUncheckedCreateWithoutScheduleAssignmentsInput>
    connectOrCreate?: TimeSlotCreateOrConnectWithoutScheduleAssignmentsInput
    connect?: TimeSlotWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutScheduleAssignmentNestedInput = {
    create?: XOR<CourseCreateWithoutScheduleAssignmentInput, CourseUncheckedCreateWithoutScheduleAssignmentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutScheduleAssignmentInput
    upsert?: CourseUpsertWithoutScheduleAssignmentInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutScheduleAssignmentInput, CourseUpdateWithoutScheduleAssignmentInput>, CourseUncheckedUpdateWithoutScheduleAssignmentInput>
  }

  export type SectionUpdateOneRequiredWithoutScheduleAssignmentNestedInput = {
    create?: XOR<SectionCreateWithoutScheduleAssignmentInput, SectionUncheckedCreateWithoutScheduleAssignmentInput>
    connectOrCreate?: SectionCreateOrConnectWithoutScheduleAssignmentInput
    upsert?: SectionUpsertWithoutScheduleAssignmentInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutScheduleAssignmentInput, SectionUpdateWithoutScheduleAssignmentInput>, SectionUncheckedUpdateWithoutScheduleAssignmentInput>
  }

  export type GroupUpdateOneWithoutScheduleAssignmentNestedInput = {
    create?: XOR<GroupCreateWithoutScheduleAssignmentInput, GroupUncheckedCreateWithoutScheduleAssignmentInput>
    connectOrCreate?: GroupCreateOrConnectWithoutScheduleAssignmentInput
    upsert?: GroupUpsertWithoutScheduleAssignmentInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutScheduleAssignmentInput, GroupUpdateWithoutScheduleAssignmentInput>, GroupUncheckedUpdateWithoutScheduleAssignmentInput>
  }

  export type LabRoomUpdateOneRequiredWithoutScheduleAssignmentsNestedInput = {
    create?: XOR<LabRoomCreateWithoutScheduleAssignmentsInput, LabRoomUncheckedCreateWithoutScheduleAssignmentsInput>
    connectOrCreate?: LabRoomCreateOrConnectWithoutScheduleAssignmentsInput
    upsert?: LabRoomUpsertWithoutScheduleAssignmentsInput
    connect?: LabRoomWhereUniqueInput
    update?: XOR<XOR<LabRoomUpdateToOneWithWhereWithoutScheduleAssignmentsInput, LabRoomUpdateWithoutScheduleAssignmentsInput>, LabRoomUncheckedUpdateWithoutScheduleAssignmentsInput>
  }

  export type LabAssistantUpdateOneRequiredWithoutScheduleAssignmentsNestedInput = {
    create?: XOR<LabAssistantCreateWithoutScheduleAssignmentsInput, LabAssistantUncheckedCreateWithoutScheduleAssignmentsInput>
    connectOrCreate?: LabAssistantCreateOrConnectWithoutScheduleAssignmentsInput
    upsert?: LabAssistantUpsertWithoutScheduleAssignmentsInput
    connect?: LabAssistantWhereUniqueInput
    update?: XOR<XOR<LabAssistantUpdateToOneWithWhereWithoutScheduleAssignmentsInput, LabAssistantUpdateWithoutScheduleAssignmentsInput>, LabAssistantUncheckedUpdateWithoutScheduleAssignmentsInput>
  }

  export type TimeSlotUpdateOneRequiredWithoutScheduleAssignmentsNestedInput = {
    create?: XOR<TimeSlotCreateWithoutScheduleAssignmentsInput, TimeSlotUncheckedCreateWithoutScheduleAssignmentsInput>
    connectOrCreate?: TimeSlotCreateOrConnectWithoutScheduleAssignmentsInput
    upsert?: TimeSlotUpsertWithoutScheduleAssignmentsInput
    connect?: TimeSlotWhereUniqueInput
    update?: XOR<XOR<TimeSlotUpdateToOneWithWhereWithoutScheduleAssignmentsInput, TimeSlotUpdateWithoutScheduleAssignmentsInput>, TimeSlotUncheckedUpdateWithoutScheduleAssignmentsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LabAssistantCreateNestedOneWithoutUserInput = {
    create?: XOR<LabAssistantCreateWithoutUserInput, LabAssistantUncheckedCreateWithoutUserInput>
    connectOrCreate?: LabAssistantCreateOrConnectWithoutUserInput
    connect?: LabAssistantWhereUniqueInput
  }

  export type LabAssistantUpdateOneWithoutUserNestedInput = {
    create?: XOR<LabAssistantCreateWithoutUserInput, LabAssistantUncheckedCreateWithoutUserInput>
    connectOrCreate?: LabAssistantCreateOrConnectWithoutUserInput
    upsert?: LabAssistantUpsertWithoutUserInput
    disconnect?: LabAssistantWhereInput | boolean
    delete?: LabAssistantWhereInput | boolean
    connect?: LabAssistantWhereUniqueInput
    update?: XOR<XOR<LabAssistantUpdateToOneWithWhereWithoutUserInput, LabAssistantUpdateWithoutUserInput>, LabAssistantUncheckedUpdateWithoutUserInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumSlotTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotType | EnumSlotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotType[] | ListEnumSlotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotType[] | ListEnumSlotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotTypeFilter<$PrismaModel> | $Enums.SlotType
  }

  export type NestedEnumSlotTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotType | EnumSlotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotType[] | ListEnumSlotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotType[] | ListEnumSlotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotTypeWithAggregatesFilter<$PrismaModel> | $Enums.SlotType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotTypeFilter<$PrismaModel>
    _max?: NestedEnumSlotTypeFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type ScheduleAssignmentCreateWithoutLabRoomInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutScheduleAssignmentInput
    section: SectionCreateNestedOneWithoutScheduleAssignmentInput
    group?: GroupCreateNestedOneWithoutScheduleAssignmentInput
    labAssistant: LabAssistantCreateNestedOneWithoutScheduleAssignmentsInput
    timeSlot: TimeSlotCreateNestedOneWithoutScheduleAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateWithoutLabRoomInput = {
    id?: string
    courseId: string
    sectionId: string
    groupId?: string | null
    labAssistantId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentCreateOrConnectWithoutLabRoomInput = {
    where: ScheduleAssignmentWhereUniqueInput
    create: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput>
  }

  export type ScheduleAssignmentCreateManyLabRoomInputEnvelope = {
    data: ScheduleAssignmentCreateManyLabRoomInput | ScheduleAssignmentCreateManyLabRoomInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleAssignmentUpsertWithWhereUniqueWithoutLabRoomInput = {
    where: ScheduleAssignmentWhereUniqueInput
    update: XOR<ScheduleAssignmentUpdateWithoutLabRoomInput, ScheduleAssignmentUncheckedUpdateWithoutLabRoomInput>
    create: XOR<ScheduleAssignmentCreateWithoutLabRoomInput, ScheduleAssignmentUncheckedCreateWithoutLabRoomInput>
  }

  export type ScheduleAssignmentUpdateWithWhereUniqueWithoutLabRoomInput = {
    where: ScheduleAssignmentWhereUniqueInput
    data: XOR<ScheduleAssignmentUpdateWithoutLabRoomInput, ScheduleAssignmentUncheckedUpdateWithoutLabRoomInput>
  }

  export type ScheduleAssignmentUpdateManyWithWhereWithoutLabRoomInput = {
    where: ScheduleAssignmentScalarWhereInput
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyWithoutLabRoomInput>
  }

  export type ScheduleAssignmentScalarWhereInput = {
    AND?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
    OR?: ScheduleAssignmentScalarWhereInput[]
    NOT?: ScheduleAssignmentScalarWhereInput | ScheduleAssignmentScalarWhereInput[]
    id?: StringFilter<"ScheduleAssignment"> | string
    courseId?: StringFilter<"ScheduleAssignment"> | string
    sectionId?: StringFilter<"ScheduleAssignment"> | string
    groupId?: StringNullableFilter<"ScheduleAssignment"> | string | null
    labRoomId?: StringFilter<"ScheduleAssignment"> | string
    labAssistantId?: StringFilter<"ScheduleAssignment"> | string
    timeSlotId?: StringFilter<"ScheduleAssignment"> | string
    status?: StringFilter<"ScheduleAssignment"> | string
    createdAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleAssignment"> | Date | string
  }

  export type CourseOfferingCreateWithoutCourseInput = {
    id?: string
    semester: string
    year: number
    totalSections: number
    requiredLabSize: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseOfferingUncheckedCreateWithoutCourseInput = {
    id?: string
    semester: string
    year: number
    totalSections: number
    requiredLabSize: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseOfferingCreateOrConnectWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    create: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput>
  }

  export type CourseOfferingCreateManyCourseInputEnvelope = {
    data: CourseOfferingCreateManyCourseInput | CourseOfferingCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleAssignmentCreateWithoutCourseInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section: SectionCreateNestedOneWithoutScheduleAssignmentInput
    group?: GroupCreateNestedOneWithoutScheduleAssignmentInput
    labRoom: LabRoomCreateNestedOneWithoutScheduleAssignmentsInput
    labAssistant: LabAssistantCreateNestedOneWithoutScheduleAssignmentsInput
    timeSlot: TimeSlotCreateNestedOneWithoutScheduleAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateWithoutCourseInput = {
    id?: string
    sectionId: string
    groupId?: string | null
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentCreateOrConnectWithoutCourseInput = {
    where: ScheduleAssignmentWhereUniqueInput
    create: XOR<ScheduleAssignmentCreateWithoutCourseInput, ScheduleAssignmentUncheckedCreateWithoutCourseInput>
  }

  export type ScheduleAssignmentCreateManyCourseInputEnvelope = {
    data: ScheduleAssignmentCreateManyCourseInput | ScheduleAssignmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseOfferingUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    update: XOR<CourseOfferingUpdateWithoutCourseInput, CourseOfferingUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput>
  }

  export type CourseOfferingUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    data: XOR<CourseOfferingUpdateWithoutCourseInput, CourseOfferingUncheckedUpdateWithoutCourseInput>
  }

  export type CourseOfferingUpdateManyWithWhereWithoutCourseInput = {
    where: CourseOfferingScalarWhereInput
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseOfferingScalarWhereInput = {
    AND?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
    OR?: CourseOfferingScalarWhereInput[]
    NOT?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
    id?: StringFilter<"CourseOffering"> | string
    courseId?: StringFilter<"CourseOffering"> | string
    semester?: StringFilter<"CourseOffering"> | string
    year?: IntFilter<"CourseOffering"> | number
    totalSections?: IntFilter<"CourseOffering"> | number
    requiredLabSize?: IntFilter<"CourseOffering"> | number
    isActive?: BoolFilter<"CourseOffering"> | boolean
    createdAt?: DateTimeFilter<"CourseOffering"> | Date | string
    updatedAt?: DateTimeFilter<"CourseOffering"> | Date | string
  }

  export type ScheduleAssignmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: ScheduleAssignmentWhereUniqueInput
    update: XOR<ScheduleAssignmentUpdateWithoutCourseInput, ScheduleAssignmentUncheckedUpdateWithoutCourseInput>
    create: XOR<ScheduleAssignmentCreateWithoutCourseInput, ScheduleAssignmentUncheckedCreateWithoutCourseInput>
  }

  export type ScheduleAssignmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: ScheduleAssignmentWhereUniqueInput
    data: XOR<ScheduleAssignmentUpdateWithoutCourseInput, ScheduleAssignmentUncheckedUpdateWithoutCourseInput>
  }

  export type ScheduleAssignmentUpdateManyWithWhereWithoutCourseInput = {
    where: ScheduleAssignmentScalarWhereInput
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutCourseOfferingsInput = {
    id?: string
    code: string
    name: string
    department: string
    credits: number
    year: number
    section: string
    batch: string
    studentType: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignment?: ScheduleAssignmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseOfferingsInput = {
    id?: string
    code: string
    name: string
    department: string
    credits: number
    year: number
    section: string
    batch: string
    studentType: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignment?: ScheduleAssignmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourseOfferingsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
  }

  export type CourseUpsertWithoutCourseOfferingsInput = {
    update: XOR<CourseUpdateWithoutCourseOfferingsInput, CourseUncheckedUpdateWithoutCourseOfferingsInput>
    create: XOR<CourseCreateWithoutCourseOfferingsInput, CourseUncheckedCreateWithoutCourseOfferingsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseOfferingsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseOfferingsInput, CourseUncheckedUpdateWithoutCourseOfferingsInput>
  }

  export type CourseUpdateWithoutCourseOfferingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    studentType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignment?: ScheduleAssignmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseOfferingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    studentType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignment?: ScheduleAssignmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type GroupCreateWithoutSectionInput = {
    id?: string
    name: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignment?: ScheduleAssignmentCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutSectionInput = {
    id?: string
    name: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignment?: ScheduleAssignmentUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutSectionInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutSectionInput, GroupUncheckedCreateWithoutSectionInput>
  }

  export type GroupCreateManySectionInputEnvelope = {
    data: GroupCreateManySectionInput | GroupCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleAssignmentCreateWithoutSectionInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutScheduleAssignmentInput
    group?: GroupCreateNestedOneWithoutScheduleAssignmentInput
    labRoom: LabRoomCreateNestedOneWithoutScheduleAssignmentsInput
    labAssistant: LabAssistantCreateNestedOneWithoutScheduleAssignmentsInput
    timeSlot: TimeSlotCreateNestedOneWithoutScheduleAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateWithoutSectionInput = {
    id?: string
    courseId: string
    groupId?: string | null
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentCreateOrConnectWithoutSectionInput = {
    where: ScheduleAssignmentWhereUniqueInput
    create: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput>
  }

  export type ScheduleAssignmentCreateManySectionInputEnvelope = {
    data: ScheduleAssignmentCreateManySectionInput | ScheduleAssignmentCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutSectionInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutSectionInput, GroupUncheckedUpdateWithoutSectionInput>
    create: XOR<GroupCreateWithoutSectionInput, GroupUncheckedCreateWithoutSectionInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutSectionInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutSectionInput, GroupUncheckedUpdateWithoutSectionInput>
  }

  export type GroupUpdateManyWithWhereWithoutSectionInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutSectionInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    sectionId?: StringFilter<"Group"> | string
    capacity?: IntFilter<"Group"> | number
    isActive?: BoolFilter<"Group"> | boolean
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type ScheduleAssignmentUpsertWithWhereUniqueWithoutSectionInput = {
    where: ScheduleAssignmentWhereUniqueInput
    update: XOR<ScheduleAssignmentUpdateWithoutSectionInput, ScheduleAssignmentUncheckedUpdateWithoutSectionInput>
    create: XOR<ScheduleAssignmentCreateWithoutSectionInput, ScheduleAssignmentUncheckedCreateWithoutSectionInput>
  }

  export type ScheduleAssignmentUpdateWithWhereUniqueWithoutSectionInput = {
    where: ScheduleAssignmentWhereUniqueInput
    data: XOR<ScheduleAssignmentUpdateWithoutSectionInput, ScheduleAssignmentUncheckedUpdateWithoutSectionInput>
  }

  export type ScheduleAssignmentUpdateManyWithWhereWithoutSectionInput = {
    where: ScheduleAssignmentScalarWhereInput
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyWithoutSectionInput>
  }

  export type SectionCreateWithoutGroupsInput = {
    id?: string
    name: string
    year: number
    department: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignment?: ScheduleAssignmentCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    year: number
    department: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignment?: ScheduleAssignmentUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutGroupsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutGroupsInput, SectionUncheckedCreateWithoutGroupsInput>
  }

  export type ScheduleAssignmentCreateWithoutGroupInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutScheduleAssignmentInput
    section: SectionCreateNestedOneWithoutScheduleAssignmentInput
    labRoom: LabRoomCreateNestedOneWithoutScheduleAssignmentsInput
    labAssistant: LabAssistantCreateNestedOneWithoutScheduleAssignmentsInput
    timeSlot: TimeSlotCreateNestedOneWithoutScheduleAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateWithoutGroupInput = {
    id?: string
    courseId: string
    sectionId: string
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentCreateOrConnectWithoutGroupInput = {
    where: ScheduleAssignmentWhereUniqueInput
    create: XOR<ScheduleAssignmentCreateWithoutGroupInput, ScheduleAssignmentUncheckedCreateWithoutGroupInput>
  }

  export type ScheduleAssignmentCreateManyGroupInputEnvelope = {
    data: ScheduleAssignmentCreateManyGroupInput | ScheduleAssignmentCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type SectionUpsertWithoutGroupsInput = {
    update: XOR<SectionUpdateWithoutGroupsInput, SectionUncheckedUpdateWithoutGroupsInput>
    create: XOR<SectionCreateWithoutGroupsInput, SectionUncheckedCreateWithoutGroupsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutGroupsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutGroupsInput, SectionUncheckedUpdateWithoutGroupsInput>
  }

  export type SectionUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignment?: ScheduleAssignmentUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignment?: ScheduleAssignmentUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type ScheduleAssignmentUpsertWithWhereUniqueWithoutGroupInput = {
    where: ScheduleAssignmentWhereUniqueInput
    update: XOR<ScheduleAssignmentUpdateWithoutGroupInput, ScheduleAssignmentUncheckedUpdateWithoutGroupInput>
    create: XOR<ScheduleAssignmentCreateWithoutGroupInput, ScheduleAssignmentUncheckedCreateWithoutGroupInput>
  }

  export type ScheduleAssignmentUpdateWithWhereUniqueWithoutGroupInput = {
    where: ScheduleAssignmentWhereUniqueInput
    data: XOR<ScheduleAssignmentUpdateWithoutGroupInput, ScheduleAssignmentUncheckedUpdateWithoutGroupInput>
  }

  export type ScheduleAssignmentUpdateManyWithWhereWithoutGroupInput = {
    where: ScheduleAssignmentScalarWhereInput
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyWithoutGroupInput>
  }

  export type ScheduleAssignmentCreateWithoutLabAssistantInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutScheduleAssignmentInput
    section: SectionCreateNestedOneWithoutScheduleAssignmentInput
    group?: GroupCreateNestedOneWithoutScheduleAssignmentInput
    labRoom: LabRoomCreateNestedOneWithoutScheduleAssignmentsInput
    timeSlot: TimeSlotCreateNestedOneWithoutScheduleAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput = {
    id?: string
    courseId: string
    sectionId: string
    groupId?: string | null
    labRoomId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentCreateOrConnectWithoutLabAssistantInput = {
    where: ScheduleAssignmentWhereUniqueInput
    create: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput>
  }

  export type ScheduleAssignmentCreateManyLabAssistantInputEnvelope = {
    data: ScheduleAssignmentCreateManyLabAssistantInput | ScheduleAssignmentCreateManyLabAssistantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutLabAssistantInput = {
    id?: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutLabAssistantInput = {
    id?: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutLabAssistantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLabAssistantInput, UserUncheckedCreateWithoutLabAssistantInput>
  }

  export type ScheduleAssignmentUpsertWithWhereUniqueWithoutLabAssistantInput = {
    where: ScheduleAssignmentWhereUniqueInput
    update: XOR<ScheduleAssignmentUpdateWithoutLabAssistantInput, ScheduleAssignmentUncheckedUpdateWithoutLabAssistantInput>
    create: XOR<ScheduleAssignmentCreateWithoutLabAssistantInput, ScheduleAssignmentUncheckedCreateWithoutLabAssistantInput>
  }

  export type ScheduleAssignmentUpdateWithWhereUniqueWithoutLabAssistantInput = {
    where: ScheduleAssignmentWhereUniqueInput
    data: XOR<ScheduleAssignmentUpdateWithoutLabAssistantInput, ScheduleAssignmentUncheckedUpdateWithoutLabAssistantInput>
  }

  export type ScheduleAssignmentUpdateManyWithWhereWithoutLabAssistantInput = {
    where: ScheduleAssignmentScalarWhereInput
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyWithoutLabAssistantInput>
  }

  export type UserUpsertWithoutLabAssistantInput = {
    update: XOR<UserUpdateWithoutLabAssistantInput, UserUncheckedUpdateWithoutLabAssistantInput>
    create: XOR<UserCreateWithoutLabAssistantInput, UserUncheckedCreateWithoutLabAssistantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLabAssistantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLabAssistantInput, UserUncheckedUpdateWithoutLabAssistantInput>
  }

  export type UserUpdateWithoutLabAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutLabAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentCreateWithoutTimeSlotInput = {
    id?: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutScheduleAssignmentInput
    section: SectionCreateNestedOneWithoutScheduleAssignmentInput
    group?: GroupCreateNestedOneWithoutScheduleAssignmentInput
    labRoom: LabRoomCreateNestedOneWithoutScheduleAssignmentsInput
    labAssistant: LabAssistantCreateNestedOneWithoutScheduleAssignmentsInput
  }

  export type ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput = {
    id?: string
    courseId: string
    sectionId: string
    groupId?: string | null
    labRoomId: string
    labAssistantId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentCreateOrConnectWithoutTimeSlotInput = {
    where: ScheduleAssignmentWhereUniqueInput
    create: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput>
  }

  export type ScheduleAssignmentCreateManyTimeSlotInputEnvelope = {
    data: ScheduleAssignmentCreateManyTimeSlotInput | ScheduleAssignmentCreateManyTimeSlotInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleAssignmentUpsertWithWhereUniqueWithoutTimeSlotInput = {
    where: ScheduleAssignmentWhereUniqueInput
    update: XOR<ScheduleAssignmentUpdateWithoutTimeSlotInput, ScheduleAssignmentUncheckedUpdateWithoutTimeSlotInput>
    create: XOR<ScheduleAssignmentCreateWithoutTimeSlotInput, ScheduleAssignmentUncheckedCreateWithoutTimeSlotInput>
  }

  export type ScheduleAssignmentUpdateWithWhereUniqueWithoutTimeSlotInput = {
    where: ScheduleAssignmentWhereUniqueInput
    data: XOR<ScheduleAssignmentUpdateWithoutTimeSlotInput, ScheduleAssignmentUncheckedUpdateWithoutTimeSlotInput>
  }

  export type ScheduleAssignmentUpdateManyWithWhereWithoutTimeSlotInput = {
    where: ScheduleAssignmentScalarWhereInput
    data: XOR<ScheduleAssignmentUpdateManyMutationInput, ScheduleAssignmentUncheckedUpdateManyWithoutTimeSlotInput>
  }

  export type CourseCreateWithoutScheduleAssignmentInput = {
    id?: string
    code: string
    name: string
    department: string
    credits: number
    year: number
    section: string
    batch: string
    studentType: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    CourseOfferings?: CourseOfferingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutScheduleAssignmentInput = {
    id?: string
    code: string
    name: string
    department: string
    credits: number
    year: number
    section: string
    batch: string
    studentType: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    CourseOfferings?: CourseOfferingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutScheduleAssignmentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutScheduleAssignmentInput, CourseUncheckedCreateWithoutScheduleAssignmentInput>
  }

  export type SectionCreateWithoutScheduleAssignmentInput = {
    id?: string
    name: string
    year: number
    department: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Groups?: GroupCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutScheduleAssignmentInput = {
    id?: string
    name: string
    year: number
    department: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Groups?: GroupUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutScheduleAssignmentInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutScheduleAssignmentInput, SectionUncheckedCreateWithoutScheduleAssignmentInput>
  }

  export type GroupCreateWithoutScheduleAssignmentInput = {
    id?: string
    name: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    section: SectionCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutScheduleAssignmentInput = {
    id?: string
    name: string
    sectionId: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupCreateOrConnectWithoutScheduleAssignmentInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutScheduleAssignmentInput, GroupUncheckedCreateWithoutScheduleAssignmentInput>
  }

  export type LabRoomCreateWithoutScheduleAssignmentsInput = {
    id?: string
    name: string
    capacity: number
    location: string
    equipment?: LabRoomCreateequipmentInput | string[]
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabRoomUncheckedCreateWithoutScheduleAssignmentsInput = {
    id?: string
    name: string
    capacity: number
    location: string
    equipment?: LabRoomCreateequipmentInput | string[]
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LabRoomCreateOrConnectWithoutScheduleAssignmentsInput = {
    where: LabRoomWhereUniqueInput
    create: XOR<LabRoomCreateWithoutScheduleAssignmentsInput, LabRoomUncheckedCreateWithoutScheduleAssignmentsInput>
  }

  export type LabAssistantCreateWithoutScheduleAssignmentsInput = {
    id?: string
    labAssistantId: string
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    department: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutLabAssistantInput
  }

  export type LabAssistantUncheckedCreateWithoutScheduleAssignmentsInput = {
    id?: string
    labAssistantId: string
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    department: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserUncheckedCreateNestedOneWithoutLabAssistantInput
  }

  export type LabAssistantCreateOrConnectWithoutScheduleAssignmentsInput = {
    where: LabAssistantWhereUniqueInput
    create: XOR<LabAssistantCreateWithoutScheduleAssignmentsInput, LabAssistantUncheckedCreateWithoutScheduleAssignmentsInput>
  }

  export type TimeSlotCreateWithoutScheduleAssignmentsInput = {
    id?: string
    dayOfWeek: string
    startTime: string
    endTime: string
    slotType: $Enums.SlotType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeSlotUncheckedCreateWithoutScheduleAssignmentsInput = {
    id?: string
    dayOfWeek: string
    startTime: string
    endTime: string
    slotType: $Enums.SlotType
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TimeSlotCreateOrConnectWithoutScheduleAssignmentsInput = {
    where: TimeSlotWhereUniqueInput
    create: XOR<TimeSlotCreateWithoutScheduleAssignmentsInput, TimeSlotUncheckedCreateWithoutScheduleAssignmentsInput>
  }

  export type CourseUpsertWithoutScheduleAssignmentInput = {
    update: XOR<CourseUpdateWithoutScheduleAssignmentInput, CourseUncheckedUpdateWithoutScheduleAssignmentInput>
    create: XOR<CourseCreateWithoutScheduleAssignmentInput, CourseUncheckedCreateWithoutScheduleAssignmentInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutScheduleAssignmentInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutScheduleAssignmentInput, CourseUncheckedUpdateWithoutScheduleAssignmentInput>
  }

  export type CourseUpdateWithoutScheduleAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    studentType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CourseOfferings?: CourseOfferingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutScheduleAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    studentType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CourseOfferings?: CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type SectionUpsertWithoutScheduleAssignmentInput = {
    update: XOR<SectionUpdateWithoutScheduleAssignmentInput, SectionUncheckedUpdateWithoutScheduleAssignmentInput>
    create: XOR<SectionCreateWithoutScheduleAssignmentInput, SectionUncheckedCreateWithoutScheduleAssignmentInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutScheduleAssignmentInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutScheduleAssignmentInput, SectionUncheckedUpdateWithoutScheduleAssignmentInput>
  }

  export type SectionUpdateWithoutScheduleAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Groups?: GroupUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutScheduleAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Groups?: GroupUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type GroupUpsertWithoutScheduleAssignmentInput = {
    update: XOR<GroupUpdateWithoutScheduleAssignmentInput, GroupUncheckedUpdateWithoutScheduleAssignmentInput>
    create: XOR<GroupCreateWithoutScheduleAssignmentInput, GroupUncheckedCreateWithoutScheduleAssignmentInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutScheduleAssignmentInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutScheduleAssignmentInput, GroupUncheckedUpdateWithoutScheduleAssignmentInput>
  }

  export type GroupUpdateWithoutScheduleAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutScheduleAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabRoomUpsertWithoutScheduleAssignmentsInput = {
    update: XOR<LabRoomUpdateWithoutScheduleAssignmentsInput, LabRoomUncheckedUpdateWithoutScheduleAssignmentsInput>
    create: XOR<LabRoomCreateWithoutScheduleAssignmentsInput, LabRoomUncheckedCreateWithoutScheduleAssignmentsInput>
    where?: LabRoomWhereInput
  }

  export type LabRoomUpdateToOneWithWhereWithoutScheduleAssignmentsInput = {
    where?: LabRoomWhereInput
    data: XOR<LabRoomUpdateWithoutScheduleAssignmentsInput, LabRoomUncheckedUpdateWithoutScheduleAssignmentsInput>
  }

  export type LabRoomUpdateWithoutScheduleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    equipment?: LabRoomUpdateequipmentInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabRoomUncheckedUpdateWithoutScheduleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    equipment?: LabRoomUpdateequipmentInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabAssistantUpsertWithoutScheduleAssignmentsInput = {
    update: XOR<LabAssistantUpdateWithoutScheduleAssignmentsInput, LabAssistantUncheckedUpdateWithoutScheduleAssignmentsInput>
    create: XOR<LabAssistantCreateWithoutScheduleAssignmentsInput, LabAssistantUncheckedCreateWithoutScheduleAssignmentsInput>
    where?: LabAssistantWhereInput
  }

  export type LabAssistantUpdateToOneWithWhereWithoutScheduleAssignmentsInput = {
    where?: LabAssistantWhereInput
    data: XOR<LabAssistantUpdateWithoutScheduleAssignmentsInput, LabAssistantUncheckedUpdateWithoutScheduleAssignmentsInput>
  }

  export type LabAssistantUpdateWithoutScheduleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLabAssistantNestedInput
  }

  export type LabAssistantUncheckedUpdateWithoutScheduleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateOneWithoutLabAssistantNestedInput
  }

  export type TimeSlotUpsertWithoutScheduleAssignmentsInput = {
    update: XOR<TimeSlotUpdateWithoutScheduleAssignmentsInput, TimeSlotUncheckedUpdateWithoutScheduleAssignmentsInput>
    create: XOR<TimeSlotCreateWithoutScheduleAssignmentsInput, TimeSlotUncheckedCreateWithoutScheduleAssignmentsInput>
    where?: TimeSlotWhereInput
  }

  export type TimeSlotUpdateToOneWithWhereWithoutScheduleAssignmentsInput = {
    where?: TimeSlotWhereInput
    data: XOR<TimeSlotUpdateWithoutScheduleAssignmentsInput, TimeSlotUncheckedUpdateWithoutScheduleAssignmentsInput>
  }

  export type TimeSlotUpdateWithoutScheduleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotType?: EnumSlotTypeFieldUpdateOperationsInput | $Enums.SlotType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotUncheckedUpdateWithoutScheduleAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotType?: EnumSlotTypeFieldUpdateOperationsInput | $Enums.SlotType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabAssistantCreateWithoutUserInput = {
    id?: string
    labAssistantId: string
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    department: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignments?: ScheduleAssignmentCreateNestedManyWithoutLabAssistantInput
  }

  export type LabAssistantUncheckedCreateWithoutUserInput = {
    id?: string
    labAssistantId: string
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    department: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ScheduleAssignments?: ScheduleAssignmentUncheckedCreateNestedManyWithoutLabAssistantInput
  }

  export type LabAssistantCreateOrConnectWithoutUserInput = {
    where: LabAssistantWhereUniqueInput
    create: XOR<LabAssistantCreateWithoutUserInput, LabAssistantUncheckedCreateWithoutUserInput>
  }

  export type LabAssistantUpsertWithoutUserInput = {
    update: XOR<LabAssistantUpdateWithoutUserInput, LabAssistantUncheckedUpdateWithoutUserInput>
    create: XOR<LabAssistantCreateWithoutUserInput, LabAssistantUncheckedCreateWithoutUserInput>
    where?: LabAssistantWhereInput
  }

  export type LabAssistantUpdateToOneWithWhereWithoutUserInput = {
    where?: LabAssistantWhereInput
    data: XOR<LabAssistantUpdateWithoutUserInput, LabAssistantUncheckedUpdateWithoutUserInput>
  }

  export type LabAssistantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignments?: ScheduleAssignmentUpdateManyWithoutLabAssistantNestedInput
  }

  export type LabAssistantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignments?: ScheduleAssignmentUncheckedUpdateManyWithoutLabAssistantNestedInput
  }

  export type ScheduleAssignmentCreateManyLabRoomInput = {
    id?: string
    courseId: string
    sectionId: string
    groupId?: string | null
    labAssistantId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentUpdateWithoutLabRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    section?: SectionUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    group?: GroupUpdateOneWithoutScheduleAssignmentNestedInput
    labAssistant?: LabAssistantUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
    timeSlot?: TimeSlotUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateWithoutLabRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutLabRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseOfferingCreateManyCourseInput = {
    id?: string
    semester: string
    year: number
    totalSections: number
    requiredLabSize: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentCreateManyCourseInput = {
    id?: string
    sectionId: string
    groupId?: string | null
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseOfferingUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalSections?: IntFieldUpdateOperationsInput | number
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseOfferingUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalSections?: IntFieldUpdateOperationsInput | number
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseOfferingUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    totalSections?: IntFieldUpdateOperationsInput | number
    requiredLabSize?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    group?: GroupUpdateOneWithoutScheduleAssignmentNestedInput
    labRoom?: LabRoomUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
    labAssistant?: LabAssistantUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
    timeSlot?: TimeSlotUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateManySectionInput = {
    id?: string
    name: string
    capacity: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentCreateManySectionInput = {
    id?: string
    courseId: string
    groupId?: string | null
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignment?: ScheduleAssignmentUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ScheduleAssignment?: ScheduleAssignmentUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    group?: GroupUpdateOneWithoutScheduleAssignmentNestedInput
    labRoom?: LabRoomUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
    labAssistant?: LabAssistantUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
    timeSlot?: TimeSlotUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentCreateManyGroupInput = {
    id?: string
    courseId: string
    sectionId: string
    labRoomId: string
    labAssistantId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    section?: SectionUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    labRoom?: LabRoomUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
    labAssistant?: LabAssistantUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
    timeSlot?: TimeSlotUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentCreateManyLabAssistantInput = {
    id?: string
    courseId: string
    sectionId: string
    groupId?: string | null
    labRoomId: string
    timeSlotId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentUpdateWithoutLabAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    section?: SectionUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    group?: GroupUpdateOneWithoutScheduleAssignmentNestedInput
    labRoom?: LabRoomUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
    timeSlot?: TimeSlotUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateWithoutLabAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labRoomId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutLabAssistantInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labRoomId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentCreateManyTimeSlotInput = {
    id?: string
    courseId: string
    sectionId: string
    groupId?: string | null
    labRoomId: string
    labAssistantId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleAssignmentUpdateWithoutTimeSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    section?: SectionUpdateOneRequiredWithoutScheduleAssignmentNestedInput
    group?: GroupUpdateOneWithoutScheduleAssignmentNestedInput
    labRoom?: LabRoomUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
    labAssistant?: LabAssistantUpdateOneRequiredWithoutScheduleAssignmentsNestedInput
  }

  export type ScheduleAssignmentUncheckedUpdateWithoutTimeSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleAssignmentUncheckedUpdateManyWithoutTimeSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    sectionId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    labRoomId?: StringFieldUpdateOperationsInput | string
    labAssistantId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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