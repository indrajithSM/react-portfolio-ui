import React from 'react';
import { Send, MessageSquare } from 'lucide-react';

export const ContactForm: React.FC = () => (
  <div className="bg-gray-800 rounded-xl p-8">
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>
      <div className="flex gap-4">
        <button type="submit" className="flex-1 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
          <Send className="w-5 h-5" />
          Send Message
        </button>
        <button type="button" className="flex-1 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Post Comment
        </button>
      </div>
    </form>
  </div>
);