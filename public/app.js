import { Accelerometer } from "accelerometer";

if (Accelerometer) {
   console.log("This device has an Accelerometer!");
   const accelerometer = new Accelerometer({ frequency: 1 });
   accelerometer.addEventListener("reading", () => {
     console.log(`${accelerometer.x},${accelerometer.y},${accelerometer.z}`);
   });
   accelerometer.start();
} else {
   console.log("This device does NOT have an Accelerometer!");
}

// reference: 
