export interface Workshop {
  id: string;
  title: string;
  image_url: string | null;
  description: string | null;
  location?: { lat: number; lng: number } | null; // Made optional with ?
  locationtext: string | null;
  overview: string | null;
  view: number;
  created_at: Date | null;
  updated_at: Date | null;
  created_by: string | null;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface WorkshopQueryParams {
  cursor?: string;
  limit?: number;
  coordinates?: Coordinates;
  radius?: number;
}

export interface WorkshopPaginatedResponse {
  workshops: Workshop[];
  nextCursor: string | null;
  hasMore: boolean;
}
