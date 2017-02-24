// .iterate(function(segment, index, x, y) [, keepLazyStack]) -> self

// Apply iterator to all path segments.

// Each iterator receives segment, index, x and y params. Where (x, y) - absolute coordinates of segment start point.
// Iterator can modify current segment directly (return nothing in this case).
// Iterator can return array of new segments to replace current one ([] means that current segment should be delated).
// If second param keepLazyStack set to true, then iterator will not evaluate stacked transforms prior to run. That can be useful to optimize calculations.
"use strict";