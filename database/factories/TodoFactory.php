<?php

namespace Database\Factories;

use App\Models\Todo;
use Illuminate\Database\Eloquent\Factories\Factory;

class TodoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Todo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence($nbWords = 4, $variableNbWords = false),
            'in_progress' => $this->faker->numberBetween($min = 0, $max = 1),
            'is_completed' => $this->faker->numberBetween($min = 0, $max = 1),
        ];
    }
}
