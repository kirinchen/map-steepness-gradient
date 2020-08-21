export class StringUtils {
  public static isBlank(str: string): boolean {
    return (!str || /^\s*$/.test(str));
  }

}
