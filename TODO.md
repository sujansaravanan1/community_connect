
# EventMap Bug Fix Progress

## Steps:
- [x] 1. Add 'use client' and dynamic imports for all react-leaflet components
- [x] 2. Add useState for customIcon and useEffect for Leaflet setup
- [x] 3. Clean up unused code and scoping issues
- [ ] 4. Test: Run dev server, check /events page, verify map + icons load
- [x] 5. Fix hydration in PinnedCalendar: useState + useEffect for client-only `isToday` date logic
- [x] 7. Fix MapContainer "already initialized": Always render MapContainer, conditional Markers only
