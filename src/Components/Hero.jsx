import React from "react";

const Hero = () => {
  return (
    <>
      <main>
        <section class="hero">
          <div class="food-carousel" aria-label="Featured food">
            <input
              class="carousel-slide-input"
              type="radio"
              name="food-slide"
              id="food-slide-1"
              checked
            />
            <input
              class="carousel-slide-input"
              type="radio"
              name="food-slide"
              id="food-slide-2"
            />
            <input
              class="carousel-slide-input"
              type="radio"
              name="food-slide"
              id="food-slide-3"
            />
            <input
              class="carousel-slide-input"
              type="radio"
              name="food-slide"
              id="food-slide-4"
            />
            <input
              class="carousel-slide-input"
              type="radio"
              name="food-slide"
              id="food-slide-5"
            />

            <div class="food-carousel-track">
              <article class="food-slide">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=85"
                  alt="Fresh pizza topped with vegetables"
                />
                <div class="hero-content">
                  <h1>Welcome to FoodTrial</h1>
                  <p>Discover and order your favorite food.</p>
                </div>
              </article>

              <article class="food-slide">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=85"
                  alt="Juicy cheeseburger with fries"
                />
                <div class="hero-content">
                  <h1>Big Flavor, Every Bite</h1>
                  <p>Try something delicious today.</p>
                </div>
              </article>

              <article class="food-slide">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85"
                  alt="Colorful healthy salad bowl"
                />
                <div class="hero-content">
                  <h1>Fresh Looks Good on You</h1>
                  <p>Find bright, wholesome favorites.</p>
                </div>
              </article>

              <article class="food-slide">
                <img
                  src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1600&q=85"
                  alt="Bowl of creamy pasta"
                />
                <div class="hero-content">
                  <h1>Comfort in Every Forkful</h1>
                  <p>Order something warm and satisfying.</p>
                </div>
              </article>

              <article class="food-slide">
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1600&q=85"
                  alt="Glazed doughnuts with colorful toppings"
                />
                <div class="hero-content">
                  <h1>Make Room for Dessert</h1>
                  <p>Finish your order on a sweet note.</p>
                </div>
              </article>
            </div>

            <label
              class="carousel-control carousel-control-prev carousel-control-prev-1"
              for="food-slide-5"
              aria-label="Previous food slide"
              role="button"
              tabindex="0"
            >
              &#10094;
            </label>
            <label
              class="carousel-control carousel-control-next carousel-control-next-1"
              for="food-slide-2"
              aria-label="Next food slide"
              role="button"
              tabindex="0"
            >
              &#10095;
            </label>
            <label
              class="carousel-control carousel-control-prev carousel-control-prev-2"
              for="food-slide-1"
              aria-label="Previous food slide"
              role="button"
              tabindex="0"
            >
              &#10094;
            </label>
            <label
              class="carousel-control carousel-control-next carousel-control-next-2"
              for="food-slide-3"
              aria-label="Next food slide"
              role="button"
              tabindex="0"
            >
              &#10095;
            </label>
            <label
              class="carousel-control carousel-control-prev carousel-control-prev-3"
              for="food-slide-2"
              aria-label="Previous food slide"
              role="button"
              tabindex="0"
            >
              &#10094;
            </label>
            <label
              class="carousel-control carousel-control-next carousel-control-next-3"
              for="food-slide-4"
              aria-label="Next food slide"
              role="button"
              tabindex="0"
            >
              &#10095;
            </label>
            <label
              class="carousel-control carousel-control-prev carousel-control-prev-4"
              for="food-slide-3"
              aria-label="Previous food slide"
              role="button"
              tabindex="0"
            >
              &#10094;
            </label>
            <label
              class="carousel-control carousel-control-next carousel-control-next-4"
              for="food-slide-5"
              aria-label="Next food slide"
              role="button"
              tabindex="0"
            >
              &#10095;
            </label>
            <label
              class="carousel-control carousel-control-prev carousel-control-prev-5"
              for="food-slide-4"
              aria-label="Previous food slide"
              role="button"
              tabindex="0"
            >
              &#10094;
            </label>
            <label
              class="carousel-control carousel-control-next carousel-control-next-5"
              for="food-slide-1"
              aria-label="Next food slide"
              role="button"
              tabindex="0"
            >
              &#10095;
            </label>

            <div class="carousel-dots" aria-label="Choose a food slide">
              <label
                class="carousel-dot is-active"
                for="food-slide-1"
                aria-label="Show slide 1"
                role="button"
                tabindex="0"
              ></label>
              <label
                class="carousel-dot"
                for="food-slide-2"
                aria-label="Show slide 2"
                role="button"
                tabindex="0"
              ></label>
              <label
                class="carousel-dot"
                for="food-slide-3"
                aria-label="Show slide 3"
                role="button"
                tabindex="0"
              ></label>
              <label
                class="carousel-dot"
                for="food-slide-4"
                aria-label="Show slide 4"
                role="button"
                tabindex="0"
              ></label>
              <label
                class="carousel-dot"
                for="food-slide-5"
                aria-label="Show slide 5"
                role="button"
                tabindex="0"
              ></label>
            </div>
          </div>
        </section>

        <section class="menu-section" id="menu">
          <div class="menu-heading">
            <p class="section-eyebrow">Our menu</p>
            <h2>Good food, ready to order</h2>
            <p>Choose a favorite or try something new from our kitchen.</p>
          </div>

          <button class="menu-see-all" type="button">
            See all
          </button>

          <div class="menu-grid">
            <article class="menu-item">
              <img
                class="menu-item-image"
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=85"
                alt="Classic margherita pizza"
              />
              <div class="menu-item-top">
                <div>
                  <p class="menu-category">Popular</p>
                  <h3>Classic Margherita</h3>
                </div>
                <span class="menu-price">PKR 3,650</span>
              </div>
              <p>
                Tomato sauce, fresh mozzarella, basil, and a crisp golden crust.
              </p>
              <button class="menu-add" type="button">
                Add to cart
              </button>
            </article>

            <article class="menu-item">
              <img
                class="menu-item-image"
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85"
                alt="Classic cheeseburger"
              />
              <div class="menu-item-top">
                <div>
                  <p class="menu-category">Burgers</p>
                  <h3>FoodTrial Smash</h3>
                </div>
                <span class="menu-price">PKR 2,950</span>
              </div>
              <p>
                Seasoned beef, cheddar, crisp lettuce, and house sauce in a
                toasted bun.
              </p>
              <button class="menu-add" type="button">
                Add to cart
              </button>
            </article>

            <article class="menu-item">
              <img
                class="menu-item-image"
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85"
                alt="Fresh garden salad bowl"
              />
              <div class="menu-item-top">
                <div>
                  <p class="menu-category">Healthy</p>
                  <h3>Garden Bowl</h3>
                </div>
                <span class="menu-price">PKR 2,800</span>
              </div>
              <p>
                Crunchy greens, roasted vegetables, avocado, and lemon herb
                dressing.
              </p>
              <button class="menu-add" type="button">
                Add to cart
              </button>
            </article>

            <article class="menu-item">
              <img
                class="menu-item-image"
                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=85"
                alt="Creamy pasta with herbs"
              />
              <div class="menu-item-top">
                <div>
                  <p class="menu-category">Pasta</p>
                  <h3>Creamy Alfredo</h3>
                </div>
                <span class="menu-price">PKR 3,350</span>
              </div>
              <p>
                Silky parmesan cream sauce, fettuccine, herbs, and cracked black
                pepper.
              </p>
              <button class="menu-add" type="button">
                Add to cart
              </button>
            </article>

            <article class="menu-item">
              <img
                class="menu-item-image"
                src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85"
                alt="Loaded golden fries"
              />
              <div class="menu-item-top">
                <div>
                  <p class="menu-category">Sides</p>
                  <h3>Loaded Fries</h3>
                </div>
                <span class="menu-price">PKR 1,800</span>
              </div>
              <p>
                Golden fries topped with cheddar, spring onions, and smoky
                sauce.
              </p>
              <button class="menu-add" type="button">
                Add to cart
              </button>
            </article>

            <article class="menu-item">
              <img
                class="menu-item-image"
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85"
                alt="Warm chocolate brownie"
              />
              <div class="menu-item-top">
                <div>
                  <p class="menu-category">Dessert</p>
                  <h3>Sweet Finish</h3>
                </div>
                <span class="menu-price">PKR 1,650</span>
              </div>
              <p>
                Warm chocolate brownie served with vanilla cream and a little
                crunch.
              </p>
              <button class="menu-add" type="button">
                Add to cart
              </button>
            </article>
          </div>

          <button class="menu-load-more" type="button">
            Load more
          </button>
        </section>
      </main>

      <a href="#" class="order-now">
        {" "}
        Order Now{" "}
      </a>

      <button class="ai-button" type="button">
        🤖
      </button>
    </>
  );
};

export default Hero;
