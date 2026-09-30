import React from 'react'

function Skills() {
  return (
    <div>
      <section id="skills"
             class="py-24 lg:py-32
                    border-t border-white/10">

        <div class="max-w-7xl mx-auto
                    px-6 lg:px-8">

            <div class="mb-16">
                <p class="text-gray-500 text-sm
                          uppercase tracking-[0.3em]">
                    Skills
                </p>

                <h2 class="mt-4 text-4xl md:text-5xl
                           font-bold">
                    Tools I work with.
                </h2>
            </div>


            <div class="grid sm:grid-cols-2
                        lg:grid-cols-4 gap-4">

                {/* <!-- Skill --> */}
                <div class="p-6 border border-white/10
                            rounded-2xl
                            hover:bg-white/[0.04]
                            hover:-translate-y-1
                            transition duration-300">
                    <h3 class="text-lg font-semibold">
                        Python
                    </h3>
                    <p class="mt-2 text-gray-500 text-sm">
                        Programming
                    </p>
                </div>


                {/* <!-- Skill --> */}
                <div class="p-6 border border-white/10
                            rounded-2xl
                            hover:bg-white/[0.04]
                            hover:-translate-y-1
                            transition duration-300">
                    <h3 class="text-lg font-semibold">
                        Django
                    </h3>
                    <p class="mt-2 text-gray-500 text-sm">
                        Web Framework
                    </p>
                </div>


                {/* <!-- Skill --> */}
                <div class="p-6 border border-white/10
                            rounded-2xl
                            hover:bg-white/[0.04]
                            hover:-translate-y-1
                            transition duration-300">
                    <h3 class="text-lg font-semibold">
                        Django REST Framework
                    </h3>
                    <p class="mt-2 text-gray-500 text-sm">
                        REST APIs
                    </p>
                </div>


                {/* <!-- Skill --> */}
                <div class="p-6 border border-white/10
                            rounded-2xl
                            hover:bg-white/[0.04]
                            hover:-translate-y-1
                            transition duration-300">
                    <h3 class="text-lg font-semibold">
                        MySQL
                    </h3>
                    <p class="mt-2 text-gray-500 text-sm">
                        Database
                    </p>
                </div>


                {/* <!-- Skill --> */}
                <div class="p-6 border border-white/10
                            rounded-2xl
                            hover:bg-white/[0.04]
                            hover:-translate-y-1
                            transition duration-300">
                    <h3 class="text-lg font-semibold">
                        JavaScript
                    </h3>
                    <p class="mt-2 text-gray-500 text-sm">
                        Frontend
                    </p>
                </div>


                {/* <!-- Skill --> */}
                <div class="p-6 border border-white/10
                            rounded-2xl
                            hover:bg-white/[0.04]
                            hover:-translate-y-1
                            transition duration-300">
                    <h3 class="text-lg font-semibold">
                        React
                    </h3>
                    <p class="mt-2 text-gray-500 text-sm">
                        Frontend Library
                    </p>
                </div>


                {/* <!-- Skill --> */}
                <div class="p-6 border border-white/10
                            rounded-2xl
                            hover:bg-white/[0.04]
                            hover:-translate-y-1
                            transition duration-300">
                    <h3 class="text-lg font-semibold">
                        Git & GitHub
                    </h3>
                    <p class="mt-2 text-gray-500 text-sm">
                        Version Control
                    </p>
                </div>


                {/* <!-- Skill --> */}
                <div class="p-6 border border-white/10
                            rounded-2xl
                            hover:bg-white/[0.04]
                            hover:-translate-y-1
                            transition duration-300">
                    <h3 class="text-lg font-semibold">
                        REST API
                    </h3>
                    <p class="mt-2 text-gray-500 text-sm">
                        Backend Development
                    </p>
                </div>

            </div>
        </div>
    </section>

    </div>
  )
}

export default Skills
