import React from 'react'

function Education() {
  return (
    <div>
       <section id="education"
             class="py-24 lg:py-32
                    border-t border-white/10">

        <div class="max-w-7xl mx-auto
                    px-6 lg:px-8">

            <div class="mb-16">
                <p class="text-gray-500 text-sm
                          uppercase tracking-[0.3em]">
                    Education
                </p>

                <h2 class="mt-4 text-4xl md:text-5xl
                           font-bold">
                    Academic journey.
                </h2>
            </div>

            <div class="space-y-6">

                {/* <!-- Education Item --> */}
                <div class="group
                            border border-white/10
                            rounded-2xl p-6 md:p-8
                            hover:border-white/30
                            hover:bg-white/[0.03]
                            transition duration-500">

                    <div class="flex flex-col md:flex-row
                                md:items-center
                                md:justify-between gap-4">

                        <div>

                            <h3 class="text-2xl font-semibold">
                                Bachelor of Science in Mathematics
                            </h3>

                            <p class="mt-2 text-gray-500">
                                University / College Name
                            </p>

                        </div>

                        <span class="text-gray-500 text-sm">
                            2023 – 2026
                        </span>

                    </div>

                    <p class="mt-5 text-gray-400
                              leading-relaxed">

                        Graduated with a strong foundation in
                        mathematics, logical reasoning,
                        problem-solving and analytical thinking.
                    </p>

                </div>


                {/* <!-- Education Item --> */}
                <div class="group
                            border border-white/10
                            rounded-2xl p-6 md:p-8
                            hover:border-white/30
                            hover:bg-white/[0.03]
                            transition duration-500">

                    <div class="flex flex-col md:flex-row
                                md:items-center
                                md:justify-between gap-4">

                        <div>

                            <h3 class="text-2xl font-semibold">
                                Python Full Stack Development
                            </h3>

                            <p class="mt-2 text-gray-500">
                                Luminar Technolab
                            </p>

                        </div>

                        <span class="text-gray-500 text-sm">
                            Training / Internship
                        </span>

                    </div>

                    <p class="mt-5 text-gray-400
                              leading-relaxed">

                        Hands-on experience with Python, Django,
                        Django REST Framework, MySQL, Git,
                        GitHub and REST API development.
                    </p>

                </div>

            </div>
        </div>
    </section>

    </div>
  )
}

export default Education
