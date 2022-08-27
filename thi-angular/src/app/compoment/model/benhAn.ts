import {BenhNhan} from "./benhNhan";

export interface BenhAn {
  id?: number;
  maBenhAn?: string;
  ngayVao?: string;
  ngayRa?: string;
  liDo?: string;
  phuongPhap?: string;
  bacSi?: string;

  // tên của khóa ngoại phải giống tên mappy
  benhNhans?: BenhNhan;
}
