"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function FooterWithScrollableDisclaimer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="py-6 text-center text-gray-400 text-sm">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <p>© {new Date().getFullYear()} Duc. All rights reserved.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="mt-2 text-emerald-400 hover:text-emerald-300 underline text-xs"
          >
            Privacy Policy & Disclaimer
          </motion.button>
        </motion.div>
      </footer>

      {/* Disclaimer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-xl max-w-md w-full max-h-[80vh] flex flex-col"
          >
            <div className="p-6 pb-0 flex justify-between items-center">
              <h3 className="text-xl font-bold text-emerald-400">Disclaimer</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Scrollable content area */}
            <div className="p-6 overflow-y-auto flex-grow">
              <div className="text-gray-300 text-sm space-y-3">
                <h3>Privacy Policy & Disclaimer</h3>

                <p>
                  Our website address is:{" "}
                  <strong>
                    <a href="https://le-vu-duc.com">https://le-vu-duc.com</a>
                  </strong>
                  .
                </p>

                <h3>Comments</h3>

                <p>
                  When visitors leave comments on the site, we collect the data
                  shown in the comments form, as well as the visitor’s IP
                  address and browser user agent string to help spam detection.
                </p>

                <p>
                  An anonymized string created from your email address (also
                  called a hash) may be provided to the Gravatar service to see
                  if you are using it. The Gravatar service privacy policy is
                  available here:{" "}
                  <a href="https://automattic.com/privacy/">
                    https://automattic.com/privacy/
                  </a>
                  . After approval of your comment, your profile picture is
                  visible to the public in the context of your comment.
                </p>

                <h3>Media</h3>

                <p>
                  If you upload images to the website, you should avoid
                  uploading images with embedded location data (EXIF GPS)
                  included. Visitors to the website can download and extract any
                  location data from images on the website.
                </p>

                <h3>Cookies</h3>

                <p>
                  If you leave a comment on our site, you may opt-in to saving
                  your name, email address, and website in cookies. These are
                  for your convenience, so you do not have to fill in your
                  details again when you leave another comment. These cookies
                  will last for one year.
                </p>

                <p>
                  If you visit our login page, we will set a temporary cookie to
                  determine if your browser accepts cookies. This cookie
                  contains no personal data and is discarded when you close your
                  browser.
                </p>

                <p>
                  When you log in, we will also set up several cookies to save
                  your login information and your screen display choices. Login
                  cookies last for two days, and screen options cookies last for
                  a year. If you select &#8220;Remember Me,&#8221; your login
                  will persist for two weeks. If you log out of your account,
                  the login cookies will be removed.
                </p>

                <p>
                  If you edit or publish an article, an additional cookie will
                  be saved in your browser. This cookie includes no personal
                  data and simply indicates the post ID of the article you just
                  edited. It expires after one day.
                </p>

                <h3>Embedded Content from Other Websites</h3>

                <p>
                  Articles on this site may include embedded content (e.g.,
                  videos, images, articles, etc.). Embedded content from other
                  websites behaves in the exact same way as if the visitor has
                  visited the other website.
                </p>

                <p>
                  These websites may collect data about you, use cookies, embed
                  additional third-party tracking, and monitor your interaction
                  with that embedded content, including tracking your
                  interaction with the embedded content if you have an account
                  and are logged in to that website.
                </p>

                {/* <h3>Google reCAPTCHA</h3>

                <p>
                  We use Google reCAPTCHA to protect our website from spam and
                  abuse. This service may collect your IP address and other data
                  to determine whether you are a human. Google reCAPTCHA is
                  subject to Google&#8217;s{" "}
                  <a href="https://policies.google.com/" title="">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="https://policies.google.com/" title="">
                    Terms of Service
                  </a>
                  .
                </p>

                <h3>Google Analytics</h3>

                <p>
                  Our website uses Google Analytics to track and analyze website
                  traffic. Google Analytics collects information such as the
                  pages you visit, how long you spend on them, and how you
                  arrived at our site. This data helps us improve the user
                  experience and content on our site.
                </p>

                <p>
                  You can opt-out of Google Analytics tracking by using the
                  Google Analytics Opt-out Browser Add-on:{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" title="">
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                  .
                </p> */}

                <h3>Who We Share Your Data With</h3>

                <p>
                  If you request a password reset, your IP address will be
                  included in the reset email.
                </p>

                <h3>How Long We Retain Your Data</h3>

                <p>
                  If you leave a comment, the comment and its metadata are
                  retained indefinitely. This is so we can recognize and approve
                  any follow-up comments automatically instead of holding them
                  in a moderation queue.
                </p>

                <p>
                  For users that register on our website (if any), we also store
                  the personal information they provide in their user profile.
                  All users can see, edit, or delete their personal information
                  at any time (except they cannot change their username).
                  Website administrators can also see and edit that information.
                </p>

                <h3>What Rights You Have Over Your Data</h3>

                <p>
                  If you have an account on this site, or have left comments,
                  you can request to receive an exported file of the personal
                  data we hold about you, including any data you have provided
                  to us. You can also request that we erase any personal data we
                  hold about you. This does not include any data we are obliged
                  to keep for administrative, legal, or security purposes.
                </p>

                <h3>Where Your Data Is Sent</h3>

                <p>
                  Visitor comments may be checked through an automated spam
                  detection service. Additionally, data collected by Google
                  Analytics and Google reCAPTCHA may be sent to Google&#8217;s
                  servers for analysis.
                </p>

                <h3>Data Security</h3>

                <p>
                  We implement appropriate measures to protect your personal
                  data from unauthorized access, alteration, or disclosure.
                  However, no data transmission over the internet can be
                  guaranteed to be completely secure.
                </p>

                <h3>Updates to This Policy</h3>

                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in legal requirements or our practices. Updates will
                  be posted on this page with the date of the last revision.
                </p>

                <p>
                  <strong>Last Updated:</strong> 13.01.2025
                </p>

                <h3>Contact Us</h3>

                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(false)}
                className="w-full px-4 py-2 bg-emerald-600 rounded-lg text-white"
              >
                I Understand
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
