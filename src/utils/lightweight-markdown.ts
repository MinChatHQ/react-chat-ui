/**
 * Ultra-lightweight markdown parser for chat messages
 * Supports only essential features: bold, italic, code, links, lists
 * Size: ~2KB minified
 */

export interface MarkdownOptions {
  linkColor?: string;
}

export function parseMarkdown(text: string, options: MarkdownOptions = {}): string {
  const { linkColor = 'blue' } = options;
  
  let html = text;
  
  // Escape HTML to prevent XSS
  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  // Code blocks (must come before inline code)
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  
  // Italic
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  
  // Strikethrough
  html = html.replace(/~~([^~]+)~~/g, '<del>$1</del>');
  
  // Links [text](url)
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g, 
    `<a href="$2" target="_blank" rel="noopener noreferrer" style="color: ${linkColor}; text-decoration: underline;">$1</a>`
  );
  
  // Auto-links (URLs)
  html = html.replace(
    /(https?:\/\/[^\s]+)/g, 
    `<a href="$1" target="_blank" rel="noopener noreferrer" style="color: ${linkColor}; text-decoration: underline;">$1</a>`
  );
  
  // Simple lists (- item)
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  
  // Numbered lists (1. item)
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ol>$1</ol>');
  
  // Line breaks
  html = html.replace(/\n/g, '<br>');
  
  return html;
}
