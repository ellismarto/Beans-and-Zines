const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

const toastTrigger2 = document.getElementById('liveToastBtn2')
const toastLiveExample2 = document.getElementById('liveToast2')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

if (toastTrigger2) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
    toastTrigger2.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }