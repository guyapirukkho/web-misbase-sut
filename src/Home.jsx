import Hoo1 from "./assets/picture/Hoo1.jpg";

export default function Home() {
  return (
    
<div
  id="indicators"
  data-carousel='{ "loadingClasses": "opacity-0", "dotsItemClasses": "carousel-dot carousel-active:bg-primary" }'
  class="relative w-full"
>
  <div class="carousel h-80">
    <div class="carousel-body h-full opacity-0">
      <div class="carousel-slide">
        <div class="bg-base-200/60 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">First slide</span>
        </div>
      </div>
      <div class="carousel-slide">
        <div class="bg-base-200/80 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Second slide</span>
        </div>
      </div>
      <div class="carousel-slide">
        <div class="bg-base-200 flex h-full justify-center p-6">
          <span class="self-center text-2xl sm:text-4xl">Third slide</span>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center gap-3"></div>
</div>

  );
}

