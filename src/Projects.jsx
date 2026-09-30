import React from 'react'

function Projects() {
  return (
    <div>
       <section id="projects"
             class="py-24 lg:py-32
                    border-t border-white/10">

        <div class="max-w-7xl mx-auto
                    px-6 lg:px-8">

            <div class="mb-16">
                <p class="text-gray-500 text-sm
                          uppercase tracking-[0.3em]">
                    Projects
                </p>

                <h2 class="mt-4 text-4xl md:text-5xl
                           font-bold">
                    Things I've built.
                </h2>
            </div>


            <div class="grid md:grid-cols-2
                        gap-6">


                {/* <!-- Project 01 --> */}
                <article class="group
                                border border-white/10
                                rounded-3xl p-8
                                hover:bg-white/[0.04]
                                hover:border-white/30
                                transition duration-500">

                    <div class="flex items-center
                                justify-between">

                        <span class="text-gray-600
                                     text-sm">
                            01
                        </span>

                        <span class="text-gray-500 text-sm">
                            Django REST Framework
                        </span>

                    </div>

                    <h3 class="mt-10 text-3xl
                               font-semibold
                               group-hover:text-gray-300
                               transition">
                        Care Connect
                    </h3>

                    <p class="mt-5 text-gray-500
                              leading-relaxed">

                        A healthcare appointment management
                        backend that allows users to manage
                        doctors and appointments through
                        RESTful APIs.
                    </p>

                    <div class="mt-8 flex flex-wrap gap-2">

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            Python
                        </span>

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            Django
                        </span>

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            DRF
                        </span>

                    </div>

                </article>


                {/* <!-- Project 02 --> */}
                <article class="group
                                border border-white/10
                                rounded-3xl p-8
                                hover:bg-white/[0.04]
                                hover:border-white/30
                                transition duration-500">

                    <div class="flex items-center
                                justify-between">

                        <span class="text-gray-600
                                     text-sm">
                            02
                        </span>

                        <span class="text-gray-500 text-sm">
                            Django REST Framework
                        </span>

                    </div>

                    <h3 class="mt-10 text-3xl
                               font-semibold
                               group-hover:text-gray-300
                               transition">
                        Code Wise
                    </h3>

                    <p class="mt-5 text-gray-500
                              leading-relaxed">

                        A coding question and submission
                        management API supporting CRUD
                        operations using Django REST Framework.
                    </p>

                    <div class="mt-8 flex flex-wrap gap-2">

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            Python
                        </span>

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            Django
                        </span>

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            REST API
                        </span>

                    </div>

                </article>


                {/* <!-- Project 03 --> */}
                <article class="group
                                border border-white/10
                                rounded-3xl p-8
                                hover:bg-white/[0.04]
                                hover:border-white/30
                                transition duration-500">

                    <div class="flex items-center
                                justify-between">

                        <span class="text-gray-600
                                     text-sm">
                            03
                        </span>

                        <span class="text-gray-500 text-sm">
                            Backend
                        </span>

                    </div>

                    <h3 class="mt-10 text-3xl
                               font-semibold
                               group-hover:text-gray-300
                               transition">
                        Expense Tracker
                    </h3>

                    <p class="mt-5 text-gray-500
                              leading-relaxed">

                        A backend application for managing users
                        and personal expenses using Django models,
                        relationships and REST APIs.
                    </p>

                    <div class="mt-8 flex flex-wrap gap-2">

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            Django
                        </span>

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            DRF
                        </span>

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            MySQL
                        </span>

                    </div>

                </article>


                {/* <!-- Project 04 --> */}
                <article class="group
                                border border-white/10
                                rounded-3xl p-8
                                hover:bg-white/[0.04]
                                hover:border-white/30
                                transition duration-500">

                    <div class="flex items-center
                                justify-between">

                        <span class="text-gray-600
                                     text-sm">
                            04
                        </span>

                        <span class="text-gray-500 text-sm">
                            AI + Django
                        </span>

                    </div>

                    <h3 class="mt-10 text-3xl
                               font-semibold
                               group-hover:text-gray-300
                               transition">
                        AI Support Ticket System
                    </h3>

                    <p class="mt-5 text-gray-500
                              leading-relaxed">

                        A support ticket management system with
                        REST APIs and AI-powered ticket analysis
                        for category, priority, sentiment and
                        response suggestions.
                    </p>

                    <div class="mt-8 flex flex-wrap gap-2">

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            Django
                        </span>

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            DRF
                        </span>

                        <span class="px-3 py-1
                                     rounded-full
                                     bg-white/5
                                     text-gray-400 text-sm">
                            Gemini
                        </span>

                    </div>

                </article>

            </div>
        </div>
    </section>


    </div>
  )
}

export default Projects
