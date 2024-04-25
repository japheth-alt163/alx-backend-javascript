import ClassRoom from './0-classroom'; // Removed the .js extension

function initializeRooms() {
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ]; // Added a trailing comma at the end of the array
  return rooms;
}

