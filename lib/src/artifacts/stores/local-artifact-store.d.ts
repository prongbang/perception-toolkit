/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Marker } from '../../../defs/marker.js';
import { NearbyResult } from '../artifact-dealer.js';
import { ARArtifact } from '../schema/ar-artifact.js';
import { GeoCoordinates } from '../schema/geo-coordinates.js';
import { ArtifactStore } from './artifact-store.js';
export declare class LocalArtifactStore implements ArtifactStore {
    private readonly markerStore;
    addArtifact(artifact: ARArtifact): void;
    findRelevantArtifacts(nearbyMarkers: Marker[], geo: GeoCoordinates): NearbyResult[];
}
