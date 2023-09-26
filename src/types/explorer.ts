export interface Explorer {
  type: "file" | "folder";
  name: string;
  data?: Explorer[];
  meta?: string;
}
