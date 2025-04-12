const shorten = text => text.length > 50 ? `${text.substr(0, 50)}...` : text

export { shorten }
