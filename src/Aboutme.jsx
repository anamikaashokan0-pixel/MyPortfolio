import React from 'react'

function Aboutme() {
  return (
    <div>
      <section id="about"
             class="py-24 lg:py-32
                    border-t border-white/10">

        <div class="max-w-7xl mx-auto
                    px-6 lg:px-8">

            {/* <!-- Section Heading --> */}
            <div class="mb-16">
                <p class="text-gray-500 text-sm
                          uppercase tracking-[0.3em]">
                    About Me
                </p>

                <h2 class="mt-4 text-4xl md:text-5xl
                           font-bold">
                    A little about me.
                </h2>
            </div>

            <div class="grid lg:grid-cols-2
                        gap-12 items-center">

                {/* <!-- About Text --> */}
                <div>

                    <p class="text-gray-300 text-xl
                              leading-relaxed">

                        I'm a Mathematics graduate and
                        Python Full Stack Developer who enjoys
                        turning ideas into practical web
                        applications.
                    </p>

                    <p class="mt-6 text-gray-500
                              leading-relaxed">

                        My development journey started with Python
                        and gradually expanded into Django,
                        Django REST Framework, databases and
                        frontend technologies. I enjoy learning
                        new technologies and improving my
                        problem-solving skills.
                    </p>

                </div>

                {/* <!-- About Card --> */}
                <div class="border border-white/10
                            rounded-3xl p-8
                            bg-white/[0.02]
                            hover:bg-white/[0.04]
                            transition duration-500">

                    <div class="grid grid-cols-2 gap-8">

                        <div>
                            <p class="text-4xl font-bold">
                                75.5%
                            </p>

                            <p class="mt-2 text-gray-500">
                                BSc Mathematics
                            </p>
                        </div>

                        <div>
                            <p class="text-4xl font-bold">
                                Python
                            </p>

                            <p class="mt-2 text-gray-500">
                                Primary Stack
                            </p>
                        </div>

                        <div>
                            <p class="text-4xl font-bold">
                                DRF
                            </p>

                            <p class="mt-2 text-gray-500">
                                API Development
                            </p>
                        </div>

                        <div>
                            <p class="text-4xl font-bold">
                                Full Stack
                            </p>

                            <p class="mt-2 text-gray-500">
                                Development
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>
    </div>
  )
}

export default Aboutme
